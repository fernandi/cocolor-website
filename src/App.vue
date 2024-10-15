<template>
  <div class="cocolor-website">
    <div v-if="showStoreLinks" class="fullscreen">
      <button class="close-button" @click="showStoreLinks = false">✕</button>
      {{ $t('get_app') }}
        <div class="store-links-container">
        <a href="https://play.google.com/store/apps/details?id=com.heretic.cocolor">  <img :src="svgImport('appStore')"></a>
        <a href="https://apps.apple.com/fr/app/cocolor/id6547847867"><img :src="svgImport('playStore')"></a>
      </div>
    </div>
    <div v-if="showLegals" class="fullscreen">
      
      <button class="close-button" @click="showLegals = false">✕</button>
      <div style="max-width: 500px;">
      {{ $t('legal_text') }}
      </div>
    </div>
    <header :class="['fixed-header', { visible: headerVisible }]">

      <div class="header-content">       
        <div class="header-right">
          <img src="./assets/logo-pink.svg" alt="Cocolor logo" class="text-logo" />
        </div>
        <div class="cta-buttons">
          <a href="https://play.cocolor.app"  class="cta-button dark">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>
            {{ $t('play_online') }}
          </a>
          <button class="cta-button light"  @click="showStoreLinks = true">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg> 
            {{ $t('get_app') }}
          </button>
       
      </div>
   
      </div>
    </header>
    
<div class="bottom-buttons">

      </div>
        <button @click="switchLanguage" class="language-button">FR — EN</button>
    <header class="hero-section">
      <div class="hero-content">
        <img src="./assets/Tete.svg" alt="Cocolor logo" class="logo" />
        <img src="./assets/logo.svg" alt="Cocolor logo" class="text-logo" />
        <p class="hero-title">{{ $t('play_with_colors') }}</p>
        <br><br>
        <div class="cta-buttons">
          <a href="https://play.cocolor.app" class="cta-button dark">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>
            {{ $t('play_online') }}
          </a>
          <button class="cta-button light" @click="showStoreLinks = true">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg> 
            {{ $t('get_app') }}
          </button>
        </div>
      </div>
    </header>

    <section class="games-section">
      <img :src="svgImport('theGames')" alt="Cocolor logo" class="section-title" />
      <br><br><br><br><br>

      <div class="game-container reverse">
        <div class="game-preview">
          <img src="./assets/AmIBlue.png" alt="Am I Blue game preview" class="game-image" />
        </div>
        <div class="game-info">
          <h3 class="game-title">{{ $t('am_i_blue') }}</h3>
          <p class="game-subtitle">{{ $t('one_player_game') }}</p>
          <p class="game-description">{{ $t('am_i_blue_desc') }}</p>
        </div>
      </div>

      <div class="game-container">
        <div class="game-preview">
            <img src="./assets/TeaForTwo.png" alt="" class="game-image" />
        </div>
        <div class="game-info">
          <h3 class="game-title">{{ $t('tea_for_two') }}</h3>
          <p class="game-subtitle">{{ $t('two_player_game') }}</p>
          <p class="game-description">{{ $t('tea_for_two_desc') }}</p>
        </div>
  </div>
  <img :src="svgImport('teaParties')" class="section-title" />

</section>

<section class="galaxy-section">
  <img :src="svgImport('theCocolorGalaxy')" alt="The Cocolor Galaxy" class="section-title" />
  <p class="section-description">{{ $t('galaxy_description') }}</p>
  <div class="galaxy-slider">
  <div class="galaxy-grid">
    <div class="galaxy-item">
      <img src="./assets/G1.jpg" alt="Cocolor workshop" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_1_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_1_description') }}</p>
      <a href="https://www.fondationlouisvuitton.fr/fr/evenements/atelier-cocolor " class="galaxy-link">fondationlouisvuitton.fr</a>
    </div>
    <div class="galaxy-item">
      <img src="./assets/G2.jpg" alt="Kids discovering color vision" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_2_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_2_description') }}</p>
      <a href="https://parismuse.com/tours/explore-modern-art-cocolor-for-families/" class="galaxy-link">parismuse.com</a>
    </div>
    <div class="galaxy-item">
      <img src="./assets/G3.jpg" alt="Cocolor app" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_3_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_3_description') }}</p>
      <a href="mailto:bonjour@heretique.fr" class="galaxy-link">{{ $t('contact_us') }}</a>
    </div>
  <div class="galaxy-item">
      <img src="./assets/G4.jpg" alt="Cocolor app" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_4_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_4_description') }}</p>
      <a href="mailto:bonjour@heretique.fr"  class="galaxy-link">{{ $t('contact_us') }}</a>
    </div>
  </div>
</div>
</section>

<section class="creators-section">
  <h2 class="creators-title">{{ $t('creators_title') }}</h2>
  
  <div class="creator-info">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/10d44aa952a122d0e7be2a6969d369588970ff78c60befefabe855267e5c574a?placeholderIfAbsent=true&apiKey=77dd066ede6c44b99cde843386742085" alt="Rosy Lamb painting in her studio" class="creator-image" />
    <div class="creator-description">
      <p>{{ $t('rosy_intro') }}</p>
      <a href="https://www.rosylamb.com/" class="link-underline">{{ $t('discover_my_paintings') }}</a>
    </div>
  </div>

  <div class="creator-info reverse">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b376ed24f716f87995c33f50efe415afaa1e1aad3cf2b9a1372e400b110f564?placeholderIfAbsent=true&apiKey=77dd066ede6c44b99cde843386742085" alt="hérétique team" class="creator-image" />
    <div class="creator-description">
      <p>{{ $t('heretic_intro') }}</p>
      <a href="https://heretique.fr" class="link-underline">{{ $t('discover_heretic') }}</a>
    </div>
  </div>
</section>

<div class="site-footer">
  <div class="footer-content">
    <div class="footer-cta">
      <h3 class="footer-title white">{{ $t('footer_share_drawing') }}</h3><br>
      <a class="cta-button dark" href="mailto:bonjour@heretique.fr">
        <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>        {{ $t('share_drawing') }}
          </a>
    </div>
    <div class="footer-cta">
      <h3 class="footer-title">{{ $t('footer_imagine_collab') }}</h3><br>
      <a class="cta-button light" href="mailto:bonjour@heretique.fr">
        <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>        {{ $t('imagine_collab') }}
          </a>
    </div>
  </div>
  <div class="footer-logo">
    <img src="./assets/logo.svg" alt="Cocolor logo" class="footer-image" />
    <a class="legal-link" @click="showLegals = true">{{ $t('legal_mentions') }}</a>
  </div>
</div>
  </div>
</template>

<style>

@font-face {
    font-family: 'Brown';
    src: url('@/assets/fonts/lineto-brown-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Brown';
    src: url('@/assets/fonts/lineto-brown-bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Brown';
    src: url('@/assets/fonts/lineto-brown-italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Brown';
    src: url('@/assets/fonts/lineto-brown-boldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

body{
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: "new-hero", sans-serif;
  font-size: 1rem;
  background-color: #281318;
  overflow-x: hidden;
  width: 100vw;
}

div, section{
  display: flex;
  flex-direction: column;
}

a{
  color:inherit;
  text-decoration: none;
  transition: color .2s;

}

.galaxy-link:hover{
  color: grey;
}
.cocolor-website {
  width: 100vw;
  overflow-x: hidden;
}

.fullscreen{
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: white;
  z-index: 200;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap:20px;
  padding: 30px;
  box-sizing: border-box;
}

.store-links-container{
  flex-direction: row-reverse;
    gap: 10px;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;

}

.fullscreen img{
  height: 50px;
  max-width: 80%;
}
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 300;
  color: #000; /* Assure que la croix est visible */
}


.fixed-header {
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  right: 0;
  z-index: 100;
  transform: translateY(-100%);
  transition: transform 0.2s ease-out;
}

.fixed-header.visible {
  transform: translateY(0);
}


.header-content{
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 25PX 30px;
  box-sizing: border-box;
  height: 80px;
}

.header-content .text-logo{
  height: 20px;
    margin: 5px;
    width: auto;
}

.header-content .dark {
  background-color: transparent !important;
  color: #e69f9f;
}

.header-content .light {
  background-color: #e69f9f !important;
  color: #281318;
}

.header-content .cta-button:hover{
  background-color: #4f393d !important;
  color: white !important;
}

.language-button {
  background: #281318;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 7px;
  padding: 5px 10px;  
  font-family: inherit;
  position: absolute;
    right: 0;
    padding: 25px;
}


.hero-section {
  background-color: #281318;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 218px 80px;
  text-align: center;
  height: 100svh;
  box-sizing: border-box;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
}

.logo {
  width: 130px;
  height: auto;
}

.text-logo {
  width: 270px;
  margin-top: 20px;
}

.hero-title {
  color: #B2CCDF;
  font-weight: 700;
  letter-spacing: 0.37px;
  text-transform: uppercase;
  margin-top: 20px;
}

.cta-buttons {
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 7px;
  padding: 5px 10px;
  font-weight: 700;
  cursor: pointer;
  text-wrap: nowrap;
  border: none;
  font-family: inherit;
  font-size: inherit;
}

.dark {
  background-color: #4f393d;
  color: #fff;
}
.light {
  background-color: #B2CCDF;
  color: #4f393d;
}


.dark:hover, .light:hover{
  background-color: #141011;
  color: white;
}



.button-icon {
  width: 11px;
  height: 11px;
}

svg {
  color : inherit;
}


/* S1 */





.games-section {
 align-items: center;
  padding: 100px 0;
}

.section-title {
  max-height: 80px;
  max-width: 90%;
  padding: 10px 23px;
}

.game-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 980px;
  width: 100%;
  margin-bottom: 120px;
  box-sizing: border-box;
  padding: 0 100px;
}

.game-container.reverse {
  flex-direction: row-reverse;
}

.game-info {
  text-align: center;
  color: #B2CCDF;
  max-width: 400px;
}

.game-title {
  font-size: 2rem;
  font-weight: 700;
}

.game-subtitle {
  color: #e69f9f;
  font-size: 1.6rem;
  margin-top: 1rem;
}

.game-description {
  font-size: 1.6rem;
  margin-top: 1rem;
}

.game-preview {
  height: 475px;
  min-width: fit-content;
  border-radius: 41px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-image {
  width: auto;
  height: 100%;
}


.tea-image {
  width: 125px;
  margin-top: 22px;
}

.tea-label {
  margin-top: 19px;
}

.cta-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  color: #B2CCDF;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 39px;
}

.galaxy-section {
  background-color: #B2CCDF;
  padding: 100px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

.galaxy-slider{
  width: 100%;
  align-items: center;
  overflow-x: scroll;
  margin-top: 100px;
}

.section-description {
  color: #281318;
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 460px;
  margin: 0;
  padding: 0 20px;
}

.galaxy-grid {
  display: flex;
  justify-content: center;
  margin-top: 90px;
  flex-direction: row;
  gap: 15px;
  width: fit-content;
  margin: 0 20px ;
    
}

.galaxy-item {
  width: 280px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  color: #000;
  padding: 0 0 25px 0;

}

.galaxy-image {
  height: 210px;
  object-fit: cover;
}
.galaxy-title {
  padding: 10px 20px;
  font-weight: bold;
}


.galaxy-description {
  padding: 0px 20px;
}

.creators-section {
  background-color: #fff;
  padding: 100px 170px 30px;
  color: #282b34;
  display: flex;
    flex-direction: column;
    align-items: center;
  
}

.creators-title {
  color: #e69f9f;
  font-size: 40px;
  line-height: 42px;
  text-align: center;
  margin-bottom: 120px;
}

.creator-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%  ;
  margin-bottom: 120px;
  max-width: 1080px;
  padding: 0 70px;
}

.creator-info.reverse {
  flex-direction: row-reverse;
}

.creator-image {
  width: 45%;
  min-width: 300px;
  height: fit-content;
}

.creator-description {
  width: 45%;
  min-width: 300px;
  line-height: auto;
}

.link-underline {
  color: #e69f9f;
  text-decoration: underline;
}

.site-footer {
  background-color: #281318;
align-items: center;
  text-align: center;
  padding: 120px 0 40px;
    gap: 40px;
}

.footer-content {
  flex-direction: row;
  max-width: 980px;
  justify-content: center;
  gap: 100px;
  margin-bottom: 120px;
}

.white{
  color: white !important;
}

.footer-cta {
  max-width: 332px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-title {
  color: #B2CCDF;
  font-size: 1rem;
  font-weight: 400;
  line-height: 21px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-image {
  width: 150px;
  height: auto;
}

.legal-link {
  color: #B2CCDF;
  font-size: .7rem;
  margin-top: 20px;
  text-decoration: none;
}

@media (max-width: 991px) {
  .fixed-header{
    bottom: 0;
    top:unset;
    transform: translateY(+100%);
    background-color: #281318;
  }
  .header-right{
    display: none;
  }

  .header-content{
    height: auto;
    padding: 5px 5px;
  }

  .header-content .cta-buttons {
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap:unset
}

  .hero-section {
    padding: 100px 20px;
  }

  .games-section {
    padding: 40px 20px;
  }

  .section-title {
    margin-bottom: 40px;
  }

  .game-container {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
    padding: 0;
  }

  .game-container.reverse {
    flex-direction: column;
  }

  .game-info {
    max-width: 100%;
  }

  .game-subtitle,
  .game-description {
    margin-top: 20px;
  }

  .galaxy-slider {
    align-items: start;
  }

  .creators-section {
    padding: 100px 20px;
  }

  .creator-info {
    /*flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
    align-items: center;*/
    display: block;
  }

  .creator-info.reverse {
    flex-direction: column;
  }

  .creator-image,
  .creator-description {
    object-fit: contain;
    width: auto;
    max-width: calc(min(100%, 400px));
    height: auto;
  }

  .site-footer {
    padding: 100px 20px 50px;
  }

  .footer-content {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 100px;
  }

  .footer-cta {
    max-width: 100%;
  }

  .footer-title {
    margin-bottom: 20px;
  }
}
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentLanguage: this.$i18n.locale.toUpperCase(),
      scrollTop: 0,
      showStoreLinks: false,
      showLegals: false,
    };
  },
  computed: {
    headerVisible() {
      console.log( this.scrollTop, window.innerHeight, window.scrollY > window.innerHeight * 0.7)

      // headerVisible est calculé en fonction de la valeur scrollTop
      return this.scrollTop > window.innerHeight * 0.9;
    },
  },
  methods: {
    svgImport(filename) {
    const language = this.$i18n.locale.toUpperCase();
    try {
      // Utilise require pour indiquer à Webpack d'inclure les fichiers SVG nécessaires
      return require(`@/assets/${filename}_${language}.svg`);
    } catch (error) {
      console.error("Erreur lors de l'import de l'image : ", error);
      return ''; // Retourne une chaîne vide en cas d'erreur
    }
  },
    switchLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'fr' ? 'en' : 'fr';
      this.currentLanguage = this.$i18n.locale.toUpperCase();
    },
    handleScroll() {
      this.scrollTop = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://use.typekit.net/mev3zhe.css';
    document.head.appendChild(link);
    let title =  "Cocolor";
    document.title = title; // Change le titre ici
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>