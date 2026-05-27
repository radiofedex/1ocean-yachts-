import type { Translations } from './en';

export const it: Translations = {
  nav: {
    home: 'Home',
    sale: 'Yacht in Vendita',
    sell: 'Vendi il tuo Yacht',
    charter: 'Charter',
    charter_america: 'Charter nelle Americhe',
    charter_europe: 'Charter in Europa',
    management: 'Gestione Yacht',
    crew: 'Selezione Equipaggio',
    brands: 'Marchi Esclusivi',
    brands_pj: 'Palmer Johnson',
    brands_gt: 'G-Tender',
    about: 'Chi Siamo',
    events: 'Eventi',
    contact: 'Contatti',
  },
  hero: {
    eyebrow: 'Miami · Monaco · Mediterraneo',
    headline: 'Curando l\'Eccellenza dello Yachting,\nUn Cliente alla Volta.',
    subheadline:
      'Servizi di vendita, charter e consulenza di yacht di lusso per clienti che si aspettano discrezione, precisione ed eccellenza ad ogni miglio nautico.',
    cta_buy: 'Acquista uno Yacht',
    cta_sell: 'Vendi uno Yacht',
    cta_charter: 'Noleggia uno Yacht',
    scroll_indicator: 'Scorri per Scoprire',
  },
  intro: {
    eyebrow: 'Chi è 1 Ocean Yachts',
    title: 'Una Società di Consulenza\nYachting di Lusso a Miami',
    subtitle:
      'Con profonda esperienza nelle vendite, nel charter, nella gestione e nella rappresentanza di marchi, siamo il vostro partner di fiducia nel mondo dello yachting.',
    description:
      'Fondata e con sede a Miami, 1 Ocean Yachts serve una clientela globale di proprietari di yacht, acquirenti e ospiti in charter con lo stesso standard di servizio personale che definisce il vero lusso.', // TODO: translate
    stats: {
      experience: { value: '15+', label: 'Anni di Esperienza' },
      yachts_sold: { value: '200+', label: 'Yacht Trattati' },
      destinations: { value: '50+', label: 'Destinazioni Charter' },
      clients: { value: '500+', label: 'Clienti Soddisfatti' },
    },
  },
  services: {
    eyebrow: 'I Nostri Servizi',
    title: 'Consulenza Completa\nnello Yachting',
    subtitle:
      'Dalla prima richiesta alla consegna finale, forniamo supporto completo in ogni aspetto dello yachting di lusso.',
    items: {
      yacht_sales: {
        title: 'Vendita Yacht',
        description: 'Accesso personalizzato agli yacht più ambiti al mondo.',
      },
      yacht_charter: {
        title: 'Charter Yacht',
        description: 'Esperienze di charter nelle Americhe e nel Mediterraneo.',
      },
      management: {
        title: 'Gestione Yacht',
        description: 'Gestione completa per proprietari in tutto il mondo.',
      },
      crew: {
        title: 'Selezione Equipaggio',
        description: 'Professionisti certificati per la vostra imbarcazione.',
      },
      construction: {
        title: 'Consulenza Nuove Costruzioni',
        description: 'Dal concetto alla consegna.',
      },
      brands: {
        title: 'Marchi Esclusivi',
        description: 'Rappresentanza Palmer Johnson & G-Tender.',
      },
    },
  },
  destinations: {
    eyebrow: 'Destinazioni Charter',
    title: 'Le Acque Più Belle\ndel Mondo',
    subtitle: 'Scoprite itinerari straordinari curati per gli ospiti più esigenti.',
    america: {
      title: 'Le Americhe',
      description:
        'Dalle acque turchesi delle Bahamas alla vivace energia di Miami, charter nelle più spettacolari rotte di navigazione dell\'emisfero occidentale.',
      cta: 'Esplora i Charter nelle Americhe',
    },
    europe: {
      title: 'Mediterraneo',
      description:
        'Esplorate le leggendarie acque del Mediterraneo — dalla bellezza selvaggia della Sardegna al glamour della Costa Azzurra.',
      cta: 'Esplora i Charter nel Mediterraneo',
      pdf_button: 'Scarica il Brochure Charter Europa',
    },
  },
  yachts: {
    eyebrow: 'Imbarcazioni in Evidenza',
    title: 'Yacht Eccezionali',
    subtitle: 'Una selezione curata dei migliori yacht disponibili per la vendita e il charter.',
    cta: 'Vedi Tutti gli Yacht',
    filter_all: 'Tutti',
    filter_sale: 'In Vendita',
    filter_charter: 'In Charter',
    price_request: 'Prezzo su Richiesta',
    charter_from: 'Charter da',
  },
  brands: {
    eyebrow: 'Rappresentanza Esclusiva',
    title: 'I Nostri Marchi\nEsclusivi',
    subtitle:
      'Rappresentanti autorizzati di due dei nomi più prestigiosi nello yachting di lusso.',
  },
  about: {
    eyebrow: 'La Nostra Storia',
    title: 'Nati sull\'Acqua,\nCostruiti per l\'Eccellenza',
    subtitle:
      'Una boutique di yachting di lusso con la portata di una rete globale e l\'attenzione di un consulente personale.',
    description:
      '1 Ocean Yachts è stata fondata con una visione singolare: offrire ai clienti un\'esperienza di consulenza raffinata quanto le imbarcazioni che rappresentiamo.', // TODO: translate
    differentiators: [
      'Servizio boutique personalizzato con portata globale',
      'Relazioni profonde con i principali cantieri navali del mondo',
      'Consulenza a servizio completo — dalla ricerca alla proprietà',
      'Rappresentanza esclusiva di marchi: Palmer Johnson & G-Tender',
      'Conoscenza esperta dei mercati delle Americhe e del Mediterraneo',
    ],
    cta: 'Scopri la Nostra Storia',
  },
  events: {
    eyebrow: 'Prossimi Eventi',
    title: 'Trovaci in\nTutto il Mondo',
    subtitle: 'Unitevi a 1 Ocean Yachts nei principali eventi del calendario nautico mondiale.',
    cta: 'Vedi Tutti gli Eventi',
  },
  lead: {
    title: 'Dicci i tuoi\ninteressi.',
    subtitle: 'Dici come possiamo servirvi.',
    options: {
      buy: {
        title: 'Acquista uno Yacht',
        description: 'Trova la tua imbarcazione perfetta con una guida esperta.',
      },
      sell: {
        title: 'Vendi uno Yacht',
        description: 'Rappresentanza discreta ed esperta per i venditori.',
      },
      charter_america: {
        title: 'Charter nelle Americhe',
        description: 'I Caraibi e la Costa Est vi aspettano.',
      },
      charter_europe: {
        title: 'Charter in Europa',
        description: 'Esperienze di charter di lusso nel Mediterraneo.',
      },
      management: {
        title: 'Gestione Yacht',
        description: 'Cura esperta per il vostro bene più prezioso.',
      },
      crew: {
        title: 'Selezione Equipaggio',
        description: 'Professionisti eccezionali per la vostra imbarcazione.',
      },
    },
  },
  contact: {
    eyebrow: 'Contattaci',
    title: 'Inizia il tuo\nViaggio in Yacht',
    subtitle: 'I nostri consulenti sono disponibili per assistervi in ogni fase.',
    form: {
      name: 'Nome Completo',
      email: 'Indirizzo Email',
      phone: 'Numero di Telefono',
      subject: 'Oggetto',
      message: 'Il Vostro Messaggio',
      submit: 'Invia Messaggio',
      success: 'Il vostro messaggio è stato inviato. Ci metteremo in contatto a breve.',
    },
  },
  modals: {
    buy: {
      title: 'Trova il tuo Yacht Perfetto',
      subtitle: 'Diteci le vostre esigenze e i nostri esperti prepareranno una selezione per voi.',
      fields: {
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        phone: 'Numero di Telefono',
        size: 'Dimensione Preferita dello Yacht',
        budget: 'Range di Budget',
        condition: 'Nuovo o Usato',
        location: 'Posizione Preferita',
        message: 'Requisiti Aggiuntivi',
      },
      size_options: ['Meno di 30m', '30–40m', '40–60m', '60m+', 'Aperto a opzioni'],
      budget_options: [
        '$500k – $2M',
        '$2M – $5M',
        '$5M – $10M',
        '$10M – $25M',
        '$25M+',
      ],
      condition_options: ['Nuovo', 'Usato', 'Entrambi'],
      cta: 'Richiedi Consulenza Privata',
      success: 'Grazie. Un consulente dedicato vi contatterà entro 24 ore.',
    },
    sell: {
      title: 'Vendi il tuo Yacht',
      subtitle: 'Tutte le richieste sono gestite con totale discrezione.',
      fields: {
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        phone: 'Numero di Telefono',
        model: 'Marca e Modello dello Yacht',
        year: 'Anno di Costruzione',
        length: 'Lunghezza (es. 42m)',
        location: 'Posizione Attuale',
        price: 'Prezzo Richiesto',
        notes: 'Note Aggiuntive',
      },
      price_placeholder: 'Riservato se preferito',
      confidentiality_note:
        'Tutte le richieste sono trattate con il massimo livello di riservatezza.',
      cta: 'Richiedi una Valutazione Riservata',
      success: 'Grazie. Il nostro team vi contatterà per discutere del vostro yacht in modo riservato.',
    },
    charter: {
      title: 'Pianifica il tuo Charter',
      subtitle: 'Dove vorreste esplorare?',
      region_america: 'Charter nelle Americhe',
      region_europe: 'Charter in Europa',
      region_america_desc: 'Caraibi, Bahamas e Costa Est',
      region_europe_desc: 'Mediterraneo e Adriatico',
      fields: {
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        phone: 'Numero di Telefono',
        destination: 'Destinazione Preferita',
        dates: 'Date Preferite',
        guests: 'Numero di Ospiti',
        yacht_type: 'Tipo di Yacht Preferito',
        budget: 'Budget Settimanale',
        message: 'Richieste Speciali',
      },
      guests_options: ['2–4 Ospiti', '4–8 Ospiti', '8–12 Ospiti', '12+ Ospiti'],
      yacht_type_options: [
        'Motoryacht',
        'Barca a Vela',
        'Catamarano',
        'Gulet',
        'Nessuna preferenza',
      ],
      budget_options: [
        '$10k – $25k / settimana',
        '$25k – $50k / settimana',
        '$50k – $100k / settimana',
        '$100k+ / settimana',
      ],
      cta: 'Pianifica il Mio Charter Privato',
      pdf_button: 'Scarica il Brochure Charter Europa',
      success: 'Grazie. Il vostro consulente charter vi contatterà entro 24 ore.',
    },
  },
  footer: {
    tagline: 'Curando l\'Eccellenza dello Yachting, Un Cliente alla Volta.',
    rights: '© 2025 1 Ocean Yachts. Tutti i diritti riservati.',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    about_col: 'Chi Siamo',
    nav_col: 'Navigazione',
    charter_col: 'Charter',
    connect_col: 'Connetti',
    social: {
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      youtube: 'YouTube',
    },
  },
  common: {
    view_details: 'Vedi Dettagli',
    request_info: 'Richiedi Informazioni',
    learn_more: 'Scopri di Più',
    contact_us: 'Contattaci',
    download_brochure: 'Scarica Brochure',
    enquire: 'Richiedi Informazioni',
    back: 'Indietro',
    next: 'Avanti',
    close: 'Chiudi',
    for_sale: 'In Vendita',
    for_charter: 'In Charter',
    price_on_request: 'Prezzo su Richiesta',
    step: 'Passo',
    of: 'di',
  },
};
