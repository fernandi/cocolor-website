// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    play_with_colors: "PLAY WITH COLORS",
    play_online: "PLAY ONLINE",
    get_app: "GET THE APP",
    the_games: "THE GAMES",
    am_i_blue: "Am I Blue?",
    one_player_game: "The one player game",
    am_i_blue_desc: "Recreate the six background colors by mixing the three primary pigment colors!",
    tea_for_two: "Tea for two",
    two_player_game: "The two player game",
    tea_for_two_desc: "Be the fastest to recreate the background color from the three primary color pigments. The loser serves the tea!",
    lets_play_now: "Let's play now!",
    the_cocolor_galaxy: "The Cocolor galaxy",
    galaxy_description: "Cocolor is more than an app, it includes workshops, drawings, and colored pencils.",
    galaxy_1_title:"Workshops",
    galaxy_2_title:"Cultural mediation",
    galaxy_3_title:"Talks & Conferences",
    galaxy_4_title:"Your project ?",
    galaxy_1_description: "Cocolor has been developed in workshops for children and adults, inspired by Rosy Lamb's practice of mixing oil paints. These workshops have been given at the Fondation Louis Vuitton, for example.",
    galaxy_2_description: "Learn to see or recreate the colors you encounter in paintings hanging in a museum. This activity is organized in association with Paris Muse at the Musée d'art Moderne in Paris",
    galaxy_3_description: "We organize talks on Rosy Lamb's studio work, her vision of color, and hérétique’s vision of digital technologies, for schools, cultural institutions and private organizations. ",
    galaxy_4_description: "Together we can design a cultural mediation project, adapted to your venue and your exhibitions, with a digital and/or physical approach. ",
    contact_us : "Contact us",
    creators_title: "A creation by Rosy Lamb & hérétique",
    rosy_intro: "Hello there. I am Rosy. This is me painting in my studio in Paris. Every morning, when I open my eyes, I start seeing all the colors around me. I love mixing all these colors with my oil paints and putting them in my paintings. But I’ve realized that I don’t really need a large palette of oil paints to mix endless colors. All I need are a few colored pencils, some white paper and my eyes and hands. And this is all you need too! CoColor invites you to discover and share your personal color vision with everyone. You will soon be making color compositions that nobody has ever made before, and I would love to see them!",
    discover_my_paintings: "Discover my work",
    heretic_intro: "And we are hérétique! The digital world in which we live is not aligned with our cultures, values, and ways of life. We believe alternatives exist. We created hérétique to contribute to the transition towards these other digital worlds. hérétique operates at the crossroads between think-tank, development studio, publishing house, and consultancy to think, create, and share digital alternatives.",
    discover_heretic: "Discover hérétique",
    footer_share_drawing: "Do you have a drawing you'd like to share with us? Would you like to receive some news from us?",
    share_drawing: "SHARE A DRAWING",
    footer_imagine_collab: "Would you like to imagine a Cocolor experience for your public or your teams?",
    imagine_collab: "IMAGINE A COLLAB",
    legal_mentions: "legal mentions",
    legal_text : "Cocolor is published by hérétique, a société par actions simplifiée (simplified joint stock company) with variable capital of 3,000 euros, whose registered office is at 35 rue le Marois 75016 Paris, France, registered in the Paris Trade and Companies Register under number 884 065 103 and represented by Mr Antoine Mestrallet, in his role as Directeur Général.\nhérétique owns and publishes the https://www.cocolor.app website. The cocolor.app website is hosted by Gandi. Address: 63 Boulevard Masséna, 75013 Paris, France\nThe publication director is Mr Antoine Mestrallet."
  },
  fr: {
    play_with_colors: "JOUEZ AVEC LES COULEURS",
    play_online: "JOUER EN LIGNE",
    get_app: "TÉLÉCHARGER L’APP",
    the_games: "LES JEUX",
    am_i_blue: "Am I Blue ?",
    one_player_game: "Le jeu solo",
    am_i_blue_desc: "Recomposez les six couleurs du fond à partir des trois pigments de couleurs primaires !",
    tea_for_two: "Tea for two",
    two_player_game: "Le jeu pour deux",
    tea_for_two_desc: "Soyez le plus rapide à recomposer la couleur du fond à partir des trois pigments de couleurs primaires. Le perdant sert le thé !",
    lets_play_now: "Jouons maintenant !",
    the_cocolor_galaxy: "La galaxie Cocolor",
    galaxy_description: "Cocolor, c’est une app mais aussi une méthode, des ateliers et un dispositif de médiation culturelle.",
    galaxy_1_title:"Ateliers",
    galaxy_2_title:"Médiation culturelle",
    galaxy_3_title:"Échanges & Conférences",
    galaxy_4_title:"Votre projet ?",
    galaxy_1_description: "Cocolor se décline dans des ateliers pour enfants et adultes, en s'inspirant de la pratique du mélange de peintures à l'huile de Rosy Lamb. Ces ateliers ont par exemple été donnés à la Fondation Louis Vuitton",
    galaxy_2_description: "Apprenez à observer ou à recréer les couleurs que vous voyez dans des peintures du musée. Cette médiation est notamment donnée avec Paris Muse au Musée d'art Moderne à Paris.",
    galaxy_3_description: "Nous organisons des échanges autour du travail d’atelier de Rosy Lamb, de sa vision de la couleur, ou de la vision du numérique portée par hérétique, auprès d’écoles, d’institutions culturelles ou d’organisations privées.",
    galaxy_4_description: "Nous pouvons ensemble imaginer un projet sur-mesure de médiation culturelle, adapté à votre lieu et à vos expositions, avec un volet numérique et/ou un volet physique.",
    contact_us : "Nous contacter",
    creators_title: "Une création par Rosy Lamb & hérétique",
    rosy_intro: "Bonjour. C'est moi, Rosy, en train de peindre dans mon atelier à Paris. Chaque matin, quand j'ouvre les yeux, je commence par regarder les couleurs qui m'entourent. J'adore mélanger ces couleurs avec mes peintures à l'huile et les mettre dans mes tableaux. Mais j'ai réalisé que je n'ai pas vraiment besoin d'une grande palette de peintures pour mélanger des couleurs à l'infini. J'ai seulement besoin de quelques crayons de couleur, de papier blanc, de mes yeux et mes mains. Et c'est tout ce dont vous avez besoin vous aussi ! CoColor est une invitation à découvrir et à partager votre vision personnelle des couleurs avec le monde. Vous pouvez réaliser des compositions de couleurs que personne n'a jamais réalisées auparavant, et que j'aimerais beaucoup voir !",
    discover_my_paintings: "Découvrir mes peintures",
    heretic_intro: "Et nous, c'est hérétique ! Le monde numérique dans lequel nous vivons n'est pas en accord avec nos cultures, nos valeurs et nos arts de vivre. Nous sommes convaincus que des alternatives existent. Nous avons créé hérétique pour contribuer à la transition vers ces autres mondes numériques. hérétique navigue à la frontière entre think-tank, studio de développement, maison d'édition et agence de conseil pour penser, créer et diffuser des alternatives numériques.",
    discover_heretic: "Découvrir hérétique",
    footer_share_drawing: "Vous avez un dessin à nous partager ? Envie de recevoir de nos nouvelles ?",
    share_drawing: "PARTAGER UN DESSIN",
    footer_imagine_collab: "Envie d'imaginer une expérience Cocolor pour vos publics ou vos équipes ?",
    imagine_collab: "IMAGINER UNE COLLAB",
    legal_mentions: "mentions légales",
    legal_text: "Cocolor est édité par la société hérétique, société par actions simplifiée au capital variable de 3 000 euros, dont le siège social est sis 35 rue le Marois 75016 Paris, France, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 884 065 103 et représentée par Monsieur Antoine Mestrallet, en sa qualité de Directeur Général.\nLa Société est propriétaire et éditeur du site internet https://www.cocolor.app.\nLe site cocolor.app est hébergé par Gandi. Adresse : 63 Boulevard Masséna, 75013 Paris, France\nLe directeur de la publication est Monsieur Antoine Mestrallet."

}
};

const i18n = createI18n({
  locale: 'fr', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages,
});

export default i18n;
