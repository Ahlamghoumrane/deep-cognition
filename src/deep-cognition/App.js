import React from 'react';
import logo from '../assets/logo.png';
import image3 from '../assets/image3.png';
import image2 from '../assets/image2.png';
import image1 from '../assets/image 1.png';
const EngagementItem = ({ icon, title, description }) => {
  return (
    <div style={{ width: '200px', margin: '20px', padding: '20px', backgroundColor: '#fff', color: '#002d4b', borderRadius: '10px' }}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Engagement = () => {
  return (
    <div style={{ backgroundColor: '#002d4b', color: '#fff', padding: '60px 30px', textAlign: 'center' }}>
      <h2>Notre Engagement</h2>
      <p>Nos engagements incarnent notre vision d'une IA innovante, agile et accessible.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '0px' }}>
        <EngagementItem
          icon="🌟"
          title="Customer Centric"
          description="Notre approche est fondée sur une compréhension approfondie des besoins de nos clients, assurant des solutions parfaitement adaptées à leurs enjeux spécifiques."
        />
        <EngagementItem
          icon="🏆"
          title="Excellence"
          description="Nous maintenons les plus hauts standards de qualité et de sécurité, quel que soit le domaine d'application."
        />
        <EngagementItem
          icon="🤝"
          title="Partenariat"
          description="Nous nous positionnons comme un véritable partenaire stratégique, aligné sur les objectifs à long terme de nos clients dans tous les secteurs."
        />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '60px' }}>
        <EngagementItem
          icon="🔑"
          title="Accessibilité"
          description="Nous nous engageons à rendre nos produits intelligents accessibles et pertinents pour tous les métiers, quelle que soit leur industrie ou la taille de l'entreprise."
        />
      </div>
    </div>
  );
};
const TechnologieDePointe = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'left'
  }}>
    <div style={{ flex: 1, paddingRight: '20px' }}>
      <h2 style={{ color: '#002d4b', fontSize: '2rem' }}>Technologie de pointe</h2>
      <p style={{ color: '#002d4b' }}>
        Deep Cognition développe des produits d'IA de pointe pour transformer les métiers en exploitant les dernières
        avancées technologiques.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div>
          <h3 style={{ color: '#002d4b', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="icon" style={{ marginRight: '8px' }}>💡</span>
            Vision
          </h3>
          <p style={{ color: '#002d4b' }}>Transformation digitale business-centric.</p>
        </div>
        <div>
          <h3 style={{ color: '#002d4b', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="icon" style={{ marginRight: '8px' }}>👥</span>
            Expertise
          </h3>
          <p style={{ color: '#002d4b' }}>Équipes hautement qualifiées en IA.</p>
        </div>
        <div>
          <h3 style={{ color: '#002d4b', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="icon" style={{ marginRight: '8px' }}>🤖</span>
            Innovation
          </h3>
          <p style={{ color: '#002d4b' }}>Développement de solutions uniques.</p>
        </div>
        <div>
          <h3 style={{ color: '#002d4b', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="icon" style={{ marginRight: '8px' }}>🔧</span>
            Évolutif
          </h3>
          <p style={{ color: '#002d4b' }}>Produits en constante évolution.</p>
        </div>
      </div>
    </div>
    <div style={{ flex: '0 0 400px' }}>
      <img src={image3} alt="Technologie de pointe" style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  </div>
);

const DiscoverIA = () => (
  <div style={{
    backgroundColor: '#013849',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
    marginTop: '40px'
  }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Découvrez l'IA révolutionnaire</h2>
    <p style={{ maxWidth: '700px', margin: 'auto', lineHeight: '1.6', fontSize: '1.1rem' }}>
      Deep Cognition développe des produits end-to-end qui automatisent les tâches et se basent sur les données et
      l'intelligence artificielle pour booster la productivité et la compétitivité de nos clients.
    </p>
    <button style={{
      backgroundColor: '#fff',
      color: '#013849',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      marginTop: '20px',
      cursor: 'pointer',
      fontSize: '1rem'
    }}>
      → Discutez avec un expert
    </button>
  </div>
);

const Footer = () => (
  <footer style={{
    backgroundColor: '#f9f9f9', // Arrière-plan blanc
    color: '#002d4b', // Texte bleu foncé
    padding: '40px 20px',
    textAlign: 'center',
    marginTop: '40px'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '40px', // Espace entre "À Propos" et "Suivez-nous"
      maxWidth: '1200px',
      margin: 'auto',
      flexWrap: 'wrap'
    }}>
      <div>
        <h4 style={{ color: '#002d4b' }}>À Propos</h4> {/* Texte bleu */}
        <p style={{ color: '#002d4b' }}>Nos produits</p> {/* Texte bleu */}
      </div>
      <div>
        <h4 style={{ color: '#002d4b' }}>Suivez-nous</h4> {/* Texte bleu */}
        <p style={{ color: '#002d4b' }}>LinkedIn</p> {/* Texte bleu */}
      </div>
    </div>
    <p style={{ fontSize: '0.9rem', color: '#002d4b', marginTop: '30px' }}> {/* Texte bleu */}
      © 2024 DEEP COGNITION. Le contenu disponible sur le site web est protégé par les lois sur les droits d'auteur. Tous les droits sont réservés.
    </p>
  </footer>
);

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#013849', color: 'white' }}>
      {/* Header */}
      <header style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '20px',
        borderBottom: '1px solid #ffffff33',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="Deep Cognition Logo" style={{ height: '60px' }} />
    <h1 style={{ marginLeft: '10px' }}>DEEP COGNITION</h1>
</div>

        <button style={{
          backgroundColor: 'white',
          color: '#013849',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Contactez-Nous
        </button>
      </header>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        marginTop: '40px',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {/* Section de Texte */}
        <div style={{ flex: 1, backgroundColor: '#013849', padding: '20px', borderRadius: '8px', color: 'white' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2', color: 'white' }}>
            Révolutionner vos métiers grâce à nos solutions innovantes
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginTop: '20px' }}>
            Chez Deep Cognition, nous combinons l’expertise de pointe et l’agilité pour rendre l’innovation accessible
            à tous les secteurs et métiers. Nos solutions intelligentes, basées sur l’intelligence artificielle, sont
            conçues pour automatiser et optimiser les processus métier, tout en s’adaptant rapidement aux besoins en
            constante évolution de nos clients. Nous nous engageons à offrir des produits performants, évolutifs et
            accessibles, qui transforment les données en leviers de croissance et de compétitivité, quelle que soit la
            taille de l’entreprise ou son domaine d’activité.
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#013849',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span role="img" aria-label="contact">📧</span> Contactez-Nous
          </button>
        </div>

        {/* Section Image */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img
            src={image1} // Remplacez par le chemin réel de votre image
            alt="Laptop with analytics dashboard"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
      </div>

      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', color: '#002d4b', paddingTop: '20px' }}>
        {/* Section Vision */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Notre Vision</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto', marginTop: '20px' }}>
            Nous voulons démocratiser l’accès aux technologies intelligentes pour permettre à chaque entreprise,
            dans n’importe quel secteur, de se concentrer sur ses priorités stratégiques. Notre vision est de libérer
            les métiers de leurs tâches répétitives grâce à l’automatisation, afin de stimuler l’innovation et la croissance,
            tout en rendant ces solutions accessibles à tous, quelle que soit la complexité des besoins.
          </p>
        </section>

        {/* Section Mission avec l'image à gauche */}
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '40px', gap: '20px', flexDirection: 'row' }}>
          {/* Image de la mission */}
          <div style={{ flex: '0 0 500px', textAlign: 'center' }}>
            <img src={image2} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
          </div>

          {/* Texte de la mission */}
          <div style={{ flex: '2', maxWidth: '600px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Notre mission</h2>
            <div style={{ borderBottom: '3px solid #002d4b', width: '50px', marginBottom: '10px' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '15px' }}>
              Nous sommes convaincus que la transformation digitale doit être accessible à tous. Notre mission est
              d’accompagner les entreprises de toutes tailles dans cette transformation en leur offrant des solutions
              intelligentes et flexibles, capables de s’adapter à différents secteurs et métiers.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Nous fournissons des produits qui optimisent la performance, facilitent la prise de décision et permettent
              à chaque organisation de prospérer dans un environnement en rapide évolution.
            </p>
          </div>
        </section>

        {/* Section Équipe avec l'image à gauche */}
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '40px', gap: '20px', flexDirection: 'row' }}>
          {/* Image de l'équipe */}
          <div style={{ flex: '0 0 500px', textAlign: 'center' }}>
            {/* You can add an image for the team section here */}
          </div>

          {/* Texte de l'équipe */}
          <div style={{ flex: '2', maxWidth: '600px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Notre équipe</h2>
            <div style={{ borderBottom: '3px solid #002d4b', width: '30px', marginBottom: '10px' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '15px' }}>
              Notre équipe pluridisciplinaire associe l’agilité et la créativité d’une startup à une expertise approfondie en
              intelligence artificielle, gestion des données et développement de solutions innovantes.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Grâce à une approche collaborative et centrée sur les besoins des clients, nous créons des solutions évolutives
              et intelligentes, permettant à nos clients de relever leurs défis avec agilité et efficacité, tout en restant à la pointe
              de l’innovation.
            </p>
          </div>
        </section>

        {/* Autres Sections */}
        <Engagement />
        <TechnologieDePointe />
        <DiscoverIA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
