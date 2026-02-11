{ pkgs, lib, ... }:

{
  # Use these languages instead
  languages.elixir.enable = true;
  languages.rust.enable = true;

  # bun because we need it for pptxgenjs
  languages.javascript = {
    enable = true;
    bun = {
      enable = true;
      install.enable = true;
    };
  };

  # Test automation with Playwright
  packages = with pkgs; [
    playwright-test
    playwright-driver
  ];

  # Browser automation for testing
  claude.code.mcpServers.playwright = {
    type = "stdio";
    command = "npx";
    args = [ "@playwright/mcp@latest" ];
  };

  # Gemini UX review via consult-llm-mcp (requires GEMINI_API_KEY env var)
  # System prompt configured in ~/.consult-llm-mcp/SYSTEM_PROMPT.md
  claude.code.mcpServers.consult-llm = {
    type = "stdio";
    command = "npx";
    args = [
      "-y"
      "consult-llm-mcp"
    ];
    env = {
      CONSULT_LLM_DEFAULT_MODEL = "gemini-3-pro-preview";
      CONSULT_LLM_ALLOWED_MODELS = "gemini-3-pro-preview";
    };
  };

  claude.code.enable = true;

  # Permissions
  claude.code.permissions = {
    defaultMode = "default";

    rules = {
      Bash = {
        allow = [
          "cargo:*"
          "git:*"
          "ls:*"
          "cat:*"
        ];
        deny = [
          "rm -rf:*"
          "sudo:*"

          # Do not run stuff with npx or nodejs
          "npx:*"
          "npm:*"
          "node:*"

          # Do not create stuff with python
          "pip:*"
          "python:*"
        ];
      };
    };
  };

  # Do not substitute from cachix because it requires a user
  cachix.enable = false;
}
