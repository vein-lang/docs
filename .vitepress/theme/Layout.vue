<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import vsDivider from './vsDivider.vue';

const { isDark } = useData()

const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
    if (!enableTransitions()) {
        isDark.value = !isDark.value
        return
    }

    const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`
    ]

    await document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
    }).ready

    document.documentElement.animate(
        { clipPath: isDark.value ? clipPath.reverse() : clipPath },
        {
            duration: 300,
            easing: 'ease-in',
            pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
        }
    )
})
</script>

<template>
    <DefaultTheme.Layout>
        <template #layout-bottom>
            <vsDivider style="padding-left: 5%; padding-right: 5%;" color="warning"> </vsDivider>
            <footer class="footer">
                <div class="footer__uls">
                    <ul>
                        <li class="footer-title">Resources</li>
                        <li><a target="_blank" href="https://gallery.vein-lang.org"> Package Gallery </a></li>
                        <li><a target="_blank" href="https://github.com/vein-lang/vein"> Github </a></li>
                        
                    </ul>
                    <ul>
                        <li class="footer-title">Help</li>
                        <li><a target="_blank" href="https://github.com/vein-lang/vein/issues">Github Issues</a></li>
                    </ul>
                    <ul>
                        <li class="footer-title">Community</li>
                        <li><a target="_blank" href="https://github.com/vein-lang/">Github</a></li>
                        <li><a href="/team">Team</a></li>
                    </ul>
                    <ul>
                        <li class="footer-title">Legal</li>
                        <li><a target="_blank" href="/etc/licenses">Licenses</a></li>
                        <li><a target="_blank" href="https://gallery.vein-lang.org/license">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="copy">
                    <span class="span-copy"> Copyright © 2021-{{ (new Date(Date.now()).getFullYear()) }} Vein Lang </span>
                    <span class="span-vein"><span> Created By </span>
                        <a target="_blank" href="http://0xf6.moe">Yuuki Wesp</a></span>
                </div>
            </footer>
        </template>
    </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
}

.VPSwitchAppearance {
    width: 22px !important;
}

.VPSwitchAppearance .check {
    transform: none !important;
}


/*footer*/
.footer {
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 30px 0 0;
}
.subscribe-content {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 100px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.footer .footer__uls {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
@media (max-width: 1200px) {
  .footer ul {
    margin: 30px 10px;
    padding: 15px;
  }
}

.footer ul {
  padding: 30px;
  list-style: none;
  margin: 30px 20px;
}
ol,
p,
ul {
  line-height: 1.7;
}
.footer ul .footer-title {
  margin-bottom: 15px;
}
.footer ul li {
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0.8;
  margin: 10px 0;
}
.footer-title {
  text-align: left;
  margin: 0;
  width: 100%;
  padding: 5px 6px;
}
.footer ul li a {
  font-size: 0.85rem;
  opacity: 0.5;
  transition: all 0.25s ease;
  font-weight: 400;
  padding: 5px;
  display: block;
}
a {
  font-weight: 500;
  color: var(--vs-theme-color) !important;
  text-decoration: none;
}
a,
button,
input,
select,
textarea {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.footer .copy {
    position: relative;
    bottom: 0;
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .8rem;
    padding: 20px;
}
.footer .copy .span-copy, .footer .copy .span-vein span {
    opacity: .5;
}


[vs-theme=dark] {
    --vs-background: 30, 32, 35;
    --vs-text: 255, 255, 255;
    --vs-gray-1: 24, 25, 28;
    --vs-gray-2: 20, 20, 23;
    --vs-gray-3: 15, 16, 19;
    --vs-gray-4: 10, 11, 14;
    --vs-shadow-opacity: .3;
    --vs-dark: 0, 0, 0;
    --vs-background-opacity: .6;
}
[vs-theme=dark] {
    --vs-theme-bg: #18191c;
    --vs-theme-color: #fff;
    --vs-theme-layout: #1e2023;
    --vs-theme-bg2: #141417;
    --vs-theme-code: #141417;
    --vs-theme-code2: #161619;
}

:root {
    --vs-primary: 25, 91, 255;
    --vs-warn: 255, 186, 0;
    --vs-danger: 255, 71, 87;
    --vs-success: 70, 201, 58;
    --vs-dark: 30, 30, 30;
    --vs-light: 244, 247, 248;
    --vs-color: 17, 18, 20;
    --vs-background: 255, 255, 255;
    --vs-text: 44, 62, 80;
    --vs-gray-1: 249, 252, 253;
    --vs-gray-2: 244, 247, 248;
    --vs-gray-3: 240, 243, 244;
    --vs-gray-4: 230, 233, 234;
}

</style>