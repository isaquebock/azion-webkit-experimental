<template>
  <Header :menuSecondary="menuSecondary">
    <template #logo>
      <HeaderLogoAzion
        href="/"
        hrefTitle="Home | Azion Technologies"
        target="_self"
        version="default"
      />
    </template>
    <template #navigation>
      <HeaderNavigation
        client:idle
        :menuData="menuData"
      />
    </template>
    <template #mobile-right-sidebar>
      <MenuMobile
        :menuSecondary="menuSecondaryMobile"
        :bottomButtons="bottomButtonsMobile"
        :menuData="menuData"
      >
        <template #logo>
          <HeaderLogoAzion
            href="/"
            hrefTitle="Home | Azion Technologies"
            target="_self"
            version="default"
          />
        </template>
      </MenuMobile>
    </template>
  </Header>
  <Hero />
  <StackSection />

  <Footer
    :list-data="listData"
    :cta="cta"
    :copyright="copyright"
    :social-buttons="socialButtons"
    lang="en"
  />
</template>

<script setup>
  import Header from './blocks/Header'
  import HeaderNavigation from './components/Menu'
  import HeaderLogoAzion from './templates/azionlogo'
  import MenuMobile from './components/MenuMobile'
  import Footer from './blocks/Footer'
  import { listData, cta, copyright, socialButtons } from './blocks/Footer/footer'
  import Hero from './blocks/Hero'
  import StackSection from './blocks/StackSection'

  const menuSecondary = [
    {
      text: 'Contact Sales',
      title: 'Contact Sales',
      link: '/en/c  ontact-sales/',
      destak: true,
      outlined: true,
      target: '_self',
      minBreakpoint: 'lg'
    },
    {
      text: 'Sign in',
      title: 'Azion SSO Login',
      link: 'https://console.azion.com/login',
      destak: true,
      outlined: true,
      target: '_blank',
      minBreakpoint: 'lg'
    }
  ]

  const menuData = {
    items: [
      {
        label: 'Home',
        href: 'https://www.azion.com/'
      },
      {
        label: 'Products',
        ref: 'productsPanel',
        items: [
          {
            label: 'Build',
            icon: '',
            items: [
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              },
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              }
            ]
          },
          {
            label: 'Store',
            icon: '',
            description:
              'Store empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.',
            items: [
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              },
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              }
            ]
          },
          {
            label: 'Secure',
            icon: '',
            description:
              'Store empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.',
            items: [
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              },
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              }
            ]
          },
          {
            label: 'Deploy',
            icon: '',
            description:
              'Store empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.',
            items: [
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              },
              {
                label: 'Edge Application',
                href: '/en/products/edge-application/',
                description:
                  'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.'
              }
            ]
          }
        ],
        rightBlock: {
          label: 'Success Cases',
          type: 'cases',
          items: [
            {
              img: {
                src: '/assets/cases/images/uploads/axur-logo-solutions.png?ims=160x90',
                alt: 'The AXUR logo, consisting of the company name in stylized font.'
              },
              description:
                'Axur unlocked the fastest automatic takedown in the market with Edge AI',
              link: {
                href: '/en/success-case/axur-reduced-time-to-takedown-with-ai',
                label: 'Read more'
              }
            },
            {
              img: {
                src: '/assets/blog/images/uploads/magalu.png?ims=160x90',
                alt: 'The Magalu logo, consisting of the company name in stylized font.'
              },
              description:
                'Magalu guarantees high availability for hundred of global-scale applications...',
              link: {
                href: '/en/success-case/magalu/',
                label: 'Read more'
              }
            }
          ]
        }
      },
      {
        label: 'Solutions',
        href: 'https://www.azion.com/solutions'
      },
      {
        label: 'Resources',
        href: 'https://www.azion.com/resources'
      },
      {
        label: 'About',
        href: 'https://www.azion.com/about'
      }
    ]
  }

  const menuSecondaryMobile = [
    {
      items: [
        {
          label: 'Carreers',
          tags: ["we're hiring!"],
          url: '/en/careers/jobs/'
        },
        {
          label: 'Support',
          url: '/en/pricing/'
        },
        {
          label: 'Privacy policy',
          url: '/en/documentation/agreements/privacy-policy/'
        }
      ]
    }
  ]

  const bottomButtonsMobile = [
    {
      label: 'Free Account',
      urlTitle: 'Azion Console Free Account',
      url: 'https://console.azion.com/singup',
      destak: true
    },
    {
      label: 'Sign In',
      urlTitle: 'Azion Console Sign In',
      url: 'https://console.azion.com/login'
    },
    {
      label: 'Contact',
      url: '/en/contact-sales/',
      urlTitle: 'Contact Page',
      icon: 'pi pi-chevron-right'
    }
  ]

  const MOCK = {
    overline: 'About us',
    titleTag: 'h1',
    title: 'Our mission is to power the hyper-connected economy',
    description:
      'From the beginning, our goal has been to create technologies that unlock new possibilities.',
    video: {
      title: 'Azion Overview',
      src: 'https://www.youtube.com/embed/your_video_id',
      image: {
        alt: "Image of a globe illustrating Azion's connections",
        dark: {
          src: 'https://www.azion.com/assets/pages/about/globe-about.png'
        },
        light: {
          src: 'https://www.azion.com/assets/pages/about/globe-about-light.png'
        }
      }
    },
    videoPlayOverlay: false,
    cards: [],
    position: 'left'
  }
</script>
