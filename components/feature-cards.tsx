import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function FeatureCards() {
  const features = [
    {
      title: 'Real project.faf in root',
      description: 'Quality-first context file baked right into your project structure',
      preview: `{
  "quality_bar": "zero_errors",
  "context": "IANA-registered",
  "status": "production-ready"
}`
    },
    {
      title: 'MCP auto-connected',
      description: 'Pre-wired to https://grok-faf-mcp.vercel.app with universal toggle',
      preview: `✓ Grok MCP Server: Active
✓ Context Protocol: Live
✓ Universal Mode: Ready`
    },
    {
      title: 'Console easter egg',
      description: 'Open your dev console and witness the magic',
      preview: `🍊 I/🍊 enjoy the squeeze!
   @elonmusk approved ✓`
    }
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-[oklch(0.75_0.18_60/0.3)] hover:border-[oklch(0.75_0.18_60)] transition-all duration-300 hover:shadow-xl hover:shadow-[oklch(0.75_0.18_60/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                {feature.description}
              </p>
              <pre className="bg-background/80 p-4 rounded-lg text-sm text-[oklch(0.75_0.18_60)] font-mono overflow-x-auto">
                {feature.preview}
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
