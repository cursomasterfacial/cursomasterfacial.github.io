/* Conteúdo único partilhado pelas 5 opções. Alterar aqui, reflete em todas. */
window.MASTER = {
  wa: '351969290136', // WhatsApp da organização para inscrições
  preco: '385 €',

  prog: {
    d1: {
      dia: 'Dia 01', tema: 'Avaliação e Diagnóstico',
      mods: [
        { t: 'A Nova Estética Facial', i: ['Estética regenerativa e longevidade', 'Como o envelhecimento acontece', 'Pele, músculo e matriz extracelular', 'O conceito de gestão do envelhecimento facial'] },
        { t: 'Anatomia e Fisiologia Facial Aplicadas', i: ['Pele e anexos cutâneos', 'Sistema muscular da face', 'Compartimentos de gordura facial', 'Sistema linfático facial', 'Sistema vascular', 'Matriz extracelular', 'Processo de envelhecimento dos tecidos'] },
        { t: 'Avaliação Facial Estratégica', i: ['Anamnese aplicada à estética facial', 'Registo fotográfico', 'Identificação das principais alterações faciais', 'Interpretação clínica dos sinais faciais', 'Construção do raciocínio terapêutico', 'Planeamento terapêutico individualizado'] },
        { t: 'Diagnóstico Diferencial', i: ['Flacidez dérmica', 'Flacidez muscular', 'Rugas estáticas e dinâmicas', 'Ptose facial', 'Edema facial', 'Bolsas palpebrais', 'Papada', 'Pele desvitalizada'] },
        { t: 'Cosmetologia e Home Care Estratégico', p: [
          { t: 'Continuidade', s: 'do tratamento', i: ['O home care como extensão do tratamento profissional', 'Potenciar os resultados obtidos em cabine', 'Adesão da cliente ao tratamento', 'Continuidade terapêutica e manutenção dos resultados'] },
          { t: 'Personalização', s: 'e orientação correta', i: ['Como orientar adequadamente a cliente', 'Rotinas domiciliárias eficazes', 'Personalização do home care', 'O papel da profissional na educação da cliente'] },
          { t: 'Rentabilidade', s: 'e fidelização', i: ['O home care como ferramenta de fidelização', 'Aumentar o valor percebido dos tratamentos', 'Acompanhamento da evolução da cliente', 'Rentabilidade através da continuidade'] }
        ] }
      ]
    },
    d2: {
      dia: 'Dia 02', tema: 'Tecnologias e Protocolos',
      mods: [
        { t: 'Tecnologias Aplicadas ao Rejuvenescimento', i: ['Radiofrequência', 'HIFU', 'Peeling Ultrassónico', 'EMS', 'Ultrassons', 'Vibração Mecânica', 'Biofotomodulação'] },
        { t: 'Protocolos Clínicos', i: ['Flacidez facial', 'Rugas e linhas de expressão', 'Região dos olhos', 'Revitalização facial', 'Pele desvitalizada', 'Lifting não invasivo'] },
        { t: 'Regenera Lifting™ Method', i: ['Conceito do método', 'Indicações', 'Benefícios', 'Associação inteligente de tecnologias', 'Construção de protocolos regenerativos'] },
        { t: 'Demonstração Prática em Modelo', i: ['Avaliação da modelo', 'Escolha da estratégia terapêutica', 'Sequência de aplicação', 'Parâmetros clínicos', 'Dosimetria', 'Execução do protocolo', 'Resultado imediato', 'Fotografias comparativas'] },
        { t: 'Casos Clínicos e Construção de Protocolos', i: ['Análise e discussão de casos reais', 'Escolha das tecnologias', 'Planeamento terapêutico', 'Número de sessões', 'Acompanhamento e evolução dos resultados'] },
        { t: 'Transformar Conhecimento em Resultado', i: ['Posicionamento profissional', 'Apresentar tratamentos regenerativos ao cliente', 'Vender valor e não preço', 'Construção de programas de tratamento', 'Fidelização e recorrência'] }
      ]
    }
  },

  metodo: [
    { n: '01', t: 'Avaliar', i: ['Anamnese', 'Fotografia', 'Leitura facial', 'Identificação das alterações'], d: 'Antes de qualquer tecnologia, observar. Cada face conta a sua própria história.' },
    { n: '02', t: 'Diagnosticar', i: ['Pele', 'Músculo', 'Gordura', 'Sistema linfático', 'Matriz extracelular'], d: 'Perceber em que camada a alteração acontece e porquê.' },
    { n: '03', t: 'Planear', i: ['Objetivo terapêutico', 'Tecnologias', 'Dosimetria', 'Sequência'], d: 'Transformar o diagnóstico numa estratégia com ordem e critério.' },
    { n: '04', t: 'Tratar', i: ['Radiofrequência', 'HIFU', 'Peeling Ultrassónico', 'EMS', 'Ultrassons', 'Vibração Mecânica', 'Biofotomodulação'], d: 'Cada tecnologia entra na altura certa, pela razão certa, na camada certa.' },
    { n: '05', t: 'Acompanhar', i: ['Home care', 'Fotografia', 'Evolução', 'Manutenção', 'Fidelização'], d: 'O resultado constrói-se no tempo, entre sessões e depois delas.' }
  ],

  profs: [
    { id: 'estela', ig: 'https://www.instagram.com/draestelacardoso/', img: 'assets/estela.webp', nome: 'Dra. Estela Cardoso', ini: 'EC',
      roles: 'Educadora · Esteticista · Fisioterapeuta · Cosmetóloga · Gerontóloga',
      papel: 'Raciocínio clínico e indicação',
      bio: 'Pós-graduada em Estética, Cosmetologia, Fisioterapia Dermato-Funcional e Estética Integrativa, com especialização em Eletroterapia, Biorressonância e Longevidade Saudável. Professora, palestrante, formadora, mentora e consultora, capacita profissionais no Brasil e na Europa.' },
    { id: 'belinha', ig: 'https://www.instagram.com/belinha.cardoso.mentora/', img: 'assets/belinha-2.webp', nome: 'Prof. Belinha Cardoso', ini: 'BC',
      roles: 'Empresária · Formadora · Palestrante · Mentora',
      papel: 'Prática e tecnologias',
      bio: 'Mais de 25 anos de experiência. Fundadora da BeLuxClinic, é referência em estética avançada, atendimento humanizado, posicionamento e desenvolvimento profissional. Presente em formações, congressos e palcos nacionais e internacionais, organiza projetos que aproximam Portugal e o Brasil, como a Full Face Experience com o Dr. Gabriel Machado.' },
    { id: 'manuela', ig: 'https://www.instagram.com/clinica.mferreira/', img: 'assets/manuela.webp', nome: 'Dra. Manuela Ferreira', ini: 'MF',
      roles: 'Esteticista · Naturopata · MF Profissional',
      papel: 'Cosmetologia e home care estratégico',
      bio: 'Mais de três décadas de experiência em estética e naturopatia. A MF Profissional, marca portuguesa criada por profissionais para profissionais, une alta tecnologia cosmética e ativos 100% naturais e concentrados, numa visão holística e integrativa: tratar de dentro para fora e de fora para dentro.' }
  ],

  beneficios: [
    'Avaliar as etapas do envelhecimento facial',
    'Diferenciar as principais alterações estéticas',
    'Selecionar as tecnologias adequadas a cada caso',
    'Utilizar tecnologias com segurança e eficiência',
    'Construir protocolos regenerativos personalizados',
    'Aplicar o Regenera Lifting™ Method',
    'Aumentar o valor percebido dos tratamentos',
    'Procurar resultados mais previsíveis e duradouros',
    'Criar uma experiência clínica diferenciada'
  ]
};
