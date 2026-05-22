---
title: "My Wezterm Configuration"
date: "2026.04.12"
category: "Tools"
tag: "[QUEST_LOG, bash, tools]"
description: "My Wezterm Configuration, to make it ready to rock."
---


```lua
local wezterm = require 'wezterm'
local keybindings = require 'keybindings'
local config = {}

config.color_scheme = 'Jellybeans'
config.window_background_opacity = 0.9
config.text_background_opacity = 1
config.window_decorations = "RESIZE"

config.inactive_pane_hsb = {
  saturation = 0.9,
  brightness = 0.8,
}

config.window_padding = {
  left = 10,
  right = 10,
  top = 10,
  bottom = 10,
}

config.font = wezterm.font('Terminess Nerd Font Mono')
config.font_size = 13.5

keybindings.apply(config)

return config
```


~/.config/wezterm/wezterm.lua

The recommendation is to place your configuration file at `$HOME/.wezterm.lua` (`%USERPROFILE%/.wezterm.lua` on Windows) to get started. or $HOME/.config/wezterm/wezterm.lua

```lua
local wezterm = require 'wezterm'
local act = wezterm.action
local module = {}


function module.apply(config)
	config.keys = {
		{
			key = ',',
			mods = 'CMD|SHIFT',
			action = act.SplitVertical {},
		},
		{
			key = '.',
			mods = 'CMD|SHIFT',
			action = act.SplitHorizontal {},
		},
		{
			key = 'j',
			mods = 'CMD|SHIFT',
			action = act.ActivatePaneDirection 'Down',
		},
		{
			key = 'k',
			mods = 'CMD|SHIFT',
			action = act.ActivatePaneDirection 'Up',
		},
		{
			key = 'h',
			mods = 'CMD|SHIFT',
			action = act.ActivatePaneDirection 'Left',
		},
		{
			key = 'l',
			mods = 'CMD|SHIFT',
			action = act.ActivatePaneDirection 'Right',
		},
		{
			key = ';',
			mods = 'CMD|SHIFT',
			action = act.PaneSelect
		},
		{
			key = 'w',
			mods = 'CMD',
			action = act.CloseCurrentPane { confirm = true },
		},
		{
			key = 'z',
			mods = 'ALT',
			action = act.TogglePaneZoomState
		},
		{
			key = 't',
			mods = 'CMD',
			action = act.SpawnTab 'CurrentPaneDomain'
		},
		{
			key = '[',
			mods = 'CMD',
			action = act.ActivateTabRelative(-1)
		},
		{
			key = ']',
			mods = 'CMD',
			action = act.ActivateTabRelative(1)
		},
		{
			key = 'w',
			mods = 'CMD',
			action = wezterm.action.CloseCurrentTab { confirm = true },
		},
	}
end

return module
```
--->  ~/.config/wezterm/keybindings.lua (edited) 


brew install --cask wezterm