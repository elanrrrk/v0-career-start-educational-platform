"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts"

interface Skill {
  name: string
  type: "hard" | "soft"
  level: number
}

interface SkillsRadarChartProps {
  skills: Skill[]
}

export function SkillsRadarChart({ skills }: SkillsRadarChartProps) {
  const data = skills.map((skill) => ({
    subject: skill.name,
    hard: skill.type === "hard" ? skill.level : 0,
    soft: skill.type === "soft" ? skill.level : 0,
    fullMark: 100,
  }))

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="oklch(0.22 0.03 280)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "oklch(0.65 0.02 260)", fontSize: 11 }}
          tickLine={false}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: "oklch(0.65 0.02 260)", fontSize: 10 }}
          tickCount={5}
        />
        <Radar
          name="Hard Skills"
          dataKey="hard"
          stroke="oklch(0.65 0.22 260)"
          fill="oklch(0.65 0.22 260)"
          fillOpacity={0.5}
        />
        <Radar
          name="Soft Skills"
          dataKey="soft"
          stroke="oklch(0.60 0.20 300)"
          fill="oklch(0.60 0.20 300)"
          fillOpacity={0.5}
        />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          formatter={(value) => (
            <span style={{ color: "oklch(0.95 0.01 260)" }}>{value}</span>
          )}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
