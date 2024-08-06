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



<!-- 
 STUPID SHIT FUCKING VITEPRESS NOT WORK I HATE THIS
include: ./index.gs.md-->
<div>
    <h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started"
            aria-label="Permalink to &quot;Getting Started&quot;">&ZeroWidthSpace;</a></h2>
    <p>You
        can get started using Vein Language right away using simple
        command!</p>
    <div class="vp-code-group vp-adaptive-theme">
        <div class="tabs"><input type="radio" name="group-j93fG" id="tab-OqAEpnT" checked><label
                for="tab-OqAEpnT">windows</label><input type="radio" name="group-j93fG" id="tab-xbWHrEe"><label
                for="tab-xbWHrEe">macOS/Linux (curl)</label></div>
        <div class="blocks">
            <div class="language-powershell vp-adaptive-theme active"><button title="Copy Code"
                    class="copy"></button><span class="lang">powershell</span>
                <pre class="shiki shiki-themes github-light github-dark vp-code"
                    tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">irm </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">"https://vein-lang.org/install.ps1"</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> iex</span></span></code></pre>
            </div>
            <div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span
                    class="lang">bash</span>
                <pre class="shiki shiki-themes github-light github-dark vp-code"
                    tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://vein-lang.org/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre>
            </div>
        </div>
    </div>
    <p><strong>*</strong>
        some features may not be available at the moment, but are being actively
        developed.</p>
</div>

<div style="margin: 100px;"></div>
<Footer></Footer>
