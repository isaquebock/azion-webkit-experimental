<template>
  <Header :menuSecondary="secondaryMenu">
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
        :menuData="menu"  
      />
    </template>
    <template #mobile-right-sidebar>
      <MenuMobile
        :menuSecondary="mobileSecondaryMenu"
        :bottomButtons="mobileBottomButtons"
        :menuData="menu"
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
  import { menu, secondaryMenu, mobileSecondaryMenu, mobileBottomButtons } from './blocks/Header/mock'
</script>
