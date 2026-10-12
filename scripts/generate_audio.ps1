Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
    $synth.SelectVoice("Microsoft Zira Desktop")
} catch {
    # fallback to default voice
}
$synth.Rate = 0

$chapters = @(
    @{
        File = "public\ai-voice-chapter-0.wav"
        Text = "Chapter One: Stack OAuth Connect. Initiating zero configuration bi-directional synchronization with GitHub, Linear, Slack, and AWS CloudWatch. Security certificates verified."
    },
    @{
        File = "public\ai-voice-chapter-1.wav"
        Text = "Chapter Two: Autonomous Agent Directed Acyclic Graph. Compiling multi-agent mesh workflows in real time. Resolving pull request edge cases and verifying abstract syntax tree boundaries."
    },
    @{
        File = "public\ai-voice-chapter-2.wav"
        Text = "Chapter Three: Self-Healing Rollback. Continuous telemetry detects latency anomaly in production. Automated canary rollback successfully executed in under eight seconds."
    },
    @{
        File = "public\ai-voice-chapter-3.wav"
        Text = "Chapter Four: Live Telemetry and Enterprise SLA. Aggregating P99 latency and cycle throughput metrics across thirty-two distributed edge regions. All systems operational."
    }
)

foreach ($ch in $chapters) {
    Write-Host "Synthesizing $($ch.File)..."
    $synth.SetOutputToWaveFile($ch.File)
    $synth.Speak($ch.Text)
}

$synth.Dispose()
Write-Host "All audio files successfully generated!"
