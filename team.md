<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/0xf6.png',
    name: 'Yuuki Wesp',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/0xf6' },
      { icon: 'telegram', link: 'https://yuuki.t.me' }
    ]
  }
]
</script>


# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />