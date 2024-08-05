---
layout: page
sidebar: false 
---

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of Vein is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
const telegramIcon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`;

const members = [
  {
    avatar: 'https://www.github.com/0xf6.png',
    name: 'Yuuki Wesp',
    title: 'Creator',
    links: [
        { icon: 'github', link: 'https://github.com/0xf6' },
        { 
            icon: { svg: telegramIcon, },
            link: 'https://yuuki.t.me' 
        }
    ]
  },
  {
    avatar: 'https://www.github.com/urumo.png',
    name: 'Σуαтсk as Aram',
    title: 'Maintainer',
    links: [
        { icon: 'github', link: 'https://github.com/urumo' },
        { 
            icon: { svg: telegramIcon, },
            link: 'https://urumo.t.me' 
        }
    ]
  },
  {
    avatar: 'https://www.github.com/code-maid.png',
    name: 'Not Your Imp',
    title: 'Vacuum Cleaner',
    links: [
        { icon: 'github', link: 'https://github.com/code-maid' }
    ]
  },
  {
    avatar: 'https://www.github.com/ZverGuy.png',
    name: 'Maxim Kitsunoff',
    title: 'Maintainer',
    links: [
        { icon: 'github', link: 'https://github.com/ZverGuy' },
        { 
            icon: { svg: telegramIcon, },
            link: 'https://kitsunoff.t.me' 
        }
    ]
  }
]
</script>
<style> 
.title {
    text-align: unset;
}
</style>