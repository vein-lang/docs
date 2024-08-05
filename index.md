---
layout: home
markdownStyles: true

hero:
    name: "Vein"
    text: "Join the future!"
    tagline: A open source high-level strictly-typed programming language with a support standalone OS, arm and quantum computing support.
    image: https://github.com/vein-lang/artwork/blob/master/vein-icon.png?raw=true

    actions:
        - theme: brand
          text: Getting Starter
          link: /getstart
        - theme: alt
          text: Cookbook
          link: /newproject

features:
    - icon: ⚛
      title: Quantum Operation
      details: Quickly create inline operations for quantum computing
    - icon: 👁
      title: Machine Learning
      details: Create sub-programs for working with neural networks, computer vision and more
    - icon: 🗿
      title: CUDA & ComputedShader
      details: Сonvenient operations related to computing based on graphics cards!
    - icon: 🏗
      title: CLI
      details: Use Vein to create concise and user-friendly CLI applications
---

## Getting Started

You can get started using Vein Language right away using simple command!

::: code-group

```powershell [windows]
irm "https://vein-lang.org/install.ps1" | iex
```

```bash [macOS/Linux (curl)]
curl -fsSL https://vein-lang.org/install.sh | bash 
```
:::

**\*** some features may not be available at the moment, but are being actively developed.
<style>
@media (min-width: 768px) {
    .VPHome {
        margin-bottom: unset !important;
    }
}

</style>
<script setup>
import Footer from './.vitepress/theme/Footer.vue';
</script>
<div style="margin: 100px;"></div>
<Footer></Footer>
