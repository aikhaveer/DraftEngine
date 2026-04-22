# Claude Code Workspace

## Environment

- **Platform:** Windows 11, shell: bash (use Unix-style paths and syntax)
- **Working directory:** `C:\Users\Khaveer Narsai\Desktop\Claude`

## Model Selection

Use the right model for the job:

| Task | Model ID |
|------|----------|
| Conversation, routing, planning | `claude-sonnet-4-6` |
| Fast, simple, or heartbeat tasks | `claude-haiku-4-5-20251001` |
| Complex reasoning, heavy lifting | `claude-opus-4-7` |

## Behavior Guidelines

- Be terse and direct — no trailing summaries, no padding
- Default to no comments in code unless the WHY is non-obvious
- Prefer editing existing files over creating new ones
- No documentation files (`.md`, `README`) unless explicitly asked
- Never commit or expose secrets — use environment variables

## Credentials

Store secrets as environment variables, never in plain text files:

```bash
export ANTHROPIC_API_KEY="..."
```

Reference in code:
- Python: `os.environ["ANTHROPIC_API_KEY"]`
- Node: `process.env.ANTHROPIC_API_KEY`

If a secret appears in a tracked file, flag it immediately.

## Workflow

- Use `TodoWrite` to track multi-step tasks within a session
- Mark each task done as soon as it's complete — don't batch
- For risky or irreversible actions (deletes, pushes, drops), confirm before proceeding
