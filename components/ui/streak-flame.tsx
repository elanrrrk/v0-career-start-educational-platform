"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface StreakFlameProps {
  streak: number
  isActive?: boolean
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
  className?: string
}

export function StreakFlame({ 
  streak, 
  isActive = true, 
  size = "md", 
  showTooltip = true,
  className 
}: StreakFlameProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-12 w-12 text-lg"
  }

  const flameSizes = {
    sm: { width: 16, height: 20 },
    md: { width: 22, height: 28 },
    lg: { width: 32, height: 40 }
  }

  const FlameContent = (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300",
        isActive 
          ? "bg-orange-500/10 hover:bg-orange-500/20" 
          : "bg-muted hover:bg-muted/80",
        className
      )}
    >
      {/* Flame SVG */}
      <div className={cn("relative", isHovered && isActive && "animate-pulse")}>
        <svg
          width={flameSizes[size].width}
          height={flameSizes[size].height}
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "transition-all duration-300",
            isHovered && isActive && "scale-110"
          )}
        >
          {/* Main flame body */}
          <path
            d="M16 0C16 0 24 8 24 18C24 24 22 28 20 32C18 36 16 40 16 40C16 40 14 36 12 32C10 28 8 24 8 18C8 8 16 0 16 0Z"
            fill={isActive ? "url(#flameGradient)" : "#6b7280"}
            className={cn(
              "transition-all duration-300",
              isActive && "drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]"
            )}
          />
          {/* Inner flame */}
          <path
            d="M16 12C16 12 20 16 20 22C20 26 18 30 18 32C18 34 16 36 16 36C16 36 14 34 14 32C14 30 12 26 12 22C12 16 16 12 16 12Z"
            fill={isActive ? "url(#innerFlameGradient)" : "#9ca3af"}
          />
          {/* Highlight */}
          <ellipse
            cx="14"
            cy="20"
            rx="2"
            ry="4"
            fill={isActive ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="flameGradient" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="30%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <linearGradient id="innerFlameGradient" x1="16" y1="12" x2="16" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect when active */}
        {isActive && (
          <div className="absolute inset-0 -z-10 blur-md">
            <div className="h-full w-full rounded-full bg-orange-500/30" />
          </div>
        )}

        {/* Sparkles animation */}
        {isActive && isHovered && (
          <>
            <span className="absolute -right-1 top-0 h-1 w-1 animate-ping rounded-full bg-yellow-400" />
            <span className="absolute -left-1 top-2 h-0.5 w-0.5 animate-ping rounded-full bg-orange-400 animation-delay-150" />
            <span className="absolute right-0 top-3 h-0.5 w-0.5 animate-ping rounded-full bg-yellow-300 animation-delay-300" />
          </>
        )}
      </div>

      {/* Streak count */}
      <span className={cn(
        "font-bold tabular-nums",
        sizeClasses[size].split(" ").pop(),
        isActive ? "text-orange-500" : "text-muted-foreground"
      )}>
        {streak}
      </span>
    </button>
  )

  if (!showTooltip) {
    return FlameContent
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {FlameContent}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <div className="text-center">
            <p className="font-semibold">
              {isActive 
                ? `${streak} ${streak === 1 ? "день" : streak < 5 ? "дня" : "дней"} подряд!` 
                : "Streak потерян"
              }
            </p>
            <p className="text-xs text-muted-foreground">
              {isActive 
                ? "Продолжай в том же духе! Решай кейсы каждый день." 
                : "Реши кейс сегодня, чтобы начать новый streak"
              }
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

// Full streak widget for profile page
interface StreakWidgetProps {
  streak: number
  maxStreak: number
  weeklyActivity: boolean[]
  className?: string
}

export function StreakWidget({ streak, maxStreak, weeklyActivity, className }: StreakWidgetProps) {
  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

  return (
    <div className={cn("rounded-xl border border-border bg-card p-6", className)}>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Твой Streak</h3>
        <StreakFlame streak={streak} size="lg" showTooltip={false} />
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-orange-500/10 p-4 text-center">
          <div className="text-3xl font-bold text-orange-500">{streak}</div>
          <div className="text-sm text-muted-foreground">Текущий streak</div>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <div className="text-3xl font-bold">{maxStreak}</div>
          <div className="text-sm text-muted-foreground">Лучший результат</div>
        </div>
      </div>

      {/* Weekly activity */}
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Эта неделя</p>
        <div className="flex justify-between gap-2">
          {days.map((day, index) => (
            <div key={day} className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                  weeklyActivity[index]
                    ? "bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-orange-500/30"
                    : "bg-muted"
                )}
              >
                {weeklyActivity[index] ? (
                  <svg width="16" height="20" viewBox="0 0 32 40" fill="none">
                    <path
                      d="M16 0C16 0 24 8 24 18C24 24 22 28 20 32C18 36 16 40 16 40C16 40 14 36 12 32C10 28 8 24 8 18C8 8 16 0 16 0Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                )}
              </div>
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation message */}
      <div className="mt-6 rounded-lg border border-orange-500/30 bg-orange-500/5 p-4 text-center">
        {streak >= 7 ? (
          <p className="text-sm">
            <span className="font-semibold text-orange-500">Невероятно!</span>{" "}
            Ты на огне уже {streak} дней!
          </p>
        ) : streak >= 3 ? (
          <p className="text-sm">
            <span className="font-semibold text-orange-500">Отлично!</span>{" "}
            Ещё {7 - streak} дней до недельного streak!
          </p>
        ) : (
          <p className="text-sm">
            Решай кейсы каждый день, чтобы{" "}
            <span className="font-semibold text-orange-500">поддержать огонь!</span>
          </p>
        )}
      </div>
    </div>
  )
}
