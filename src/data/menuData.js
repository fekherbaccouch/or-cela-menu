const U = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&auto=format&q=80`

export const menuItems = [
  /* ── COCKTAILS · Shoots ────────────────────────────────────────────────── */
  { id: 'sht-001', name: 'Tequila',      description: 'Shot de tequila.',               category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-001.webp', hasVideo: false },
  { id: 'sht-002', name: 'B52',          description: 'Shot layeré classique.',          category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-002.webp', hasVideo: false },
  { id: 'sht-003', name: 'Tequila Café', description: 'Shot tequila et café.',           category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-003.webp', hasVideo: false },
  { id: 'sht-004', name: 'Carambar',     description: 'Shot sucré au caramel.',          category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-004.webp', hasVideo: false },
  { id: 'sht-005', name: 'Flamingo',     description: 'Shot fruité rosé.',               category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-005.webp', hasVideo: false },
  { id: 'sht-006', name: 'Vikings',      description: 'Shot puissant et corsé.',         category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-006.webp', hasVideo: false },
  { id: 'sht-007', name: 'Monkey Brain', description: 'Shot exotique et surprenant.',    category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-007.webp', hasVideo: false },
  { id: 'sht-008', name: 'Tuti Fruti',   description: 'Shot fruité et coloré.',          category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-008.webp', hasVideo: false },
  { id: 'sht-009', name: 'Dodgers',      description: 'Shot signature de la maison.',    category: 'Cocktails', subcategory: 'Shoots', origin: 'International', type: ['Alcoholic'], price: 15, isFeatured: false, imageUrl: '/sht-009.webp', hasVideo: false },

  /* ── COCKTAILS · Cocktail Signature ────────────────────────────────────── */
  { id: 'csig-001', name: 'Crayzy Love',   description: 'Cocktail signature maison, fruité et envoûtant.',    category: 'Cocktails', subcategory: 'Cocktail Signature', origin: 'International', type: ['Alcoholic'], price: 25, isFeatured: true,  imageUrl: '/csig-001.webp', hasVideo: false },
  { id: 'csig-002', name: 'Sweet Dreams',  description: 'Douceur en verre, notes sucrées et crémeuses.',     category: 'Cocktails', subcategory: 'Cocktail Signature', origin: 'International', type: ['Alcoholic'], price: 25, isFeatured: false, imageUrl: '/csig-002.webp', hasVideo: false },
  { id: 'csig-003', name: 'Happy',         description: 'Cocktail festif, pétillant et fruité.',              category: 'Cocktails', subcategory: 'Cocktail Signature', origin: 'International', type: ['Alcoholic'], price: 25, isFeatured: false, imageUrl: '/csig-003.webp', hasVideo: false },
  { id: 'csig-004', name: 'Ice Breath',    description: 'Cocktail frais et mentholé, sensation glacée.',      category: 'Cocktails', subcategory: 'Cocktail Signature', origin: 'International', type: ['Alcoholic'], price: 25, isFeatured: true,  imageUrl: '/csig-004.webp', hasVideo: false },

  /* ── COCKTAILS · Destination Cocktail ──────────────────────────────────── */
  { id: 'cdst-001', name: 'Gold Pastis',       description: 'Pastis doré, anisé et rafraîchissant.',              category: 'Cocktails', subcategory: 'Destination Cocktail', origin: 'International', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cdst-001.webp', hasVideo: false },
  { id: 'cdst-002', name: 'Avignon Pastis',    description: 'Pastis façon Avignon, doux et parfumé.',             category: 'Cocktails', subcategory: 'Destination Cocktail', origin: 'International', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cdst-002.webp', hasVideo: false },
  { id: 'cdst-003', name: 'Boycoot Pastis',    description: 'Pastis signature avec une touche originale.',        category: 'Cocktails', subcategory: 'Destination Cocktail', origin: 'International', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cdst-003.webp', hasVideo: false },
  { id: 'cdst-004', name: 'Pastis Limonade',   description: 'Pastis allongé à la limonade, frais et léger.',      category: 'Cocktails', subcategory: 'Destination Cocktail', origin: 'International', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cdst-004.webp', hasVideo: false },
  { id: 'cdst-005', name: 'Fraisanais Pastis', description: 'Pastis à la fraise des bois, fruité et anisé.',      category: 'Cocktails', subcategory: 'Destination Cocktail', origin: 'International', type: ['Alcoholic'], price: 20, isFeatured: true,  imageUrl: '/cdst-005.webp', hasVideo: false },
  { id: 'cdst-006', name: 'Pastis Spritz',     description: 'Pastis revisité en spritz, pétillant et festif.',    category: 'Cocktails', subcategory: 'Destination Cocktail', origin: 'International', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cdst-006.webp', hasVideo: false },

  /* ── COCKTAILS · Notre Cocktail ─────────────────────────────────────────── */
  { id: 'cnot-001', name: 'Elmdina',    description: 'Cocktail tunisien inspiré de la médina, notes d\'agrumes et menthe.', category: 'Cocktails', subcategory: 'Notre Cocktail', origin: 'Tunisia', type: ['Alcoholic'], price: 20, isFeatured: true,  imageUrl: '/cnot-001.webp', hasVideo: false },
  { id: 'cnot-002', name: 'Sidi Bou',   description: 'Hommage au village de Sidi Bou Saïd, floral et délicat.',             category: 'Cocktails', subcategory: 'Notre Cocktail', origin: 'Tunisia', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cnot-002.webp', hasVideo: false },
  { id: 'cnot-003', name: 'Tunisiano',  description: 'L\'esprit tunisien en cocktail, épicé et chaleureux.',                category: 'Cocktails', subcategory: 'Notre Cocktail', origin: 'Tunisia', type: ['Alcoholic'], price: 20, isFeatured: true,  imageUrl: '/cnot-003.webp', hasVideo: false },
  { id: 'cnot-004', name: 'Lela Lbaya', description: 'Cocktail signature Or Cela, mystérieux et envoûtant.',                category: 'Cocktails', subcategory: 'Notre Cocktail', origin: 'Tunisia', type: ['Alcoholic'], price: 20, isFeatured: false, imageUrl: '/cnot-004.webp', hasVideo: false },

  /* ── BOISSONS · Bières ──────────────────────────────────────────────────── */
  { id: 'biere-001', name: 'Celtia',        description: 'Bière tunisienne blonde, dorée et rafraîchissante.',          category: 'Boissons', subcategory: 'Bières', origin: 'Tunisia',       type: ['Alcoholic'], price: 7,   isFeatured: true,  imageUrl: '/biere-001.webp', hasVideo: false },
  { id: 'biere-002', name: 'Becks',          description: 'Lager allemande de caractère, légèrement amère.',             category: 'Boissons', subcategory: 'Bières', origin: 'International', type: ['Alcoholic'], price: 8,   isFeatured: false, imageUrl: '/biere-002.webp', hasVideo: false },
  { id: 'biere-003', name: 'Heineken',       description: 'Lager hollandaise premium, 5% vol.',                          category: 'Boissons', subcategory: 'Bières', origin: 'International', type: ['Alcoholic'], price: 8,   isFeatured: false, imageUrl: '/biere-003.webp', hasVideo: false },
  { id: 'biere-004', name: 'Amstel',         description: 'Bière douce et équilibrée, légèrement maltée.',               category: 'Boissons', subcategory: 'Bières', origin: 'International', type: ['Alcoholic'], price: 7,   isFeatured: false, imageUrl: '/biere-004.webp', hasVideo: false },
  { id: 'biere-005', name: 'Smirnoff Ice',   description: 'Boisson maltée aromatisée, fraîche et légèrement sucrée.',    category: 'Boissons', subcategory: 'Bières', origin: 'International', type: ['Alcoholic'], price: 20,  isFeatured: false, imageUrl: '/biere-005.webp', hasVideo: false },

  /* ── BOISSONS · Soft Drinks ─────────────────────────────────────────────── */
  { id: 'soft-001', name: 'Eau',            description: 'Eau plate fraîche.',                          category: 'Boissons', subcategory: 'Soft Drinks', origin: 'International', type: ['Vegan', 'Gluten-Free'], price: 7,  isFeatured: false, imageUrl: '/soft-001.webp', hasVideo: false },
  { id: 'soft-002', name: 'Eau Gazeuse',    description: 'Eau minérale gazeuse, bien fraîche.',          category: 'Boissons', subcategory: 'Soft Drinks', origin: 'International', type: ['Vegan', 'Gluten-Free'], price: 7,  isFeatured: false, imageUrl: '/soft-002.webp', hasVideo: false },
  { id: 'soft-003', name: 'Coca-Cola',      description: 'La référence mondiale, servie bien fraîche.',  category: 'Boissons', subcategory: 'Soft Drinks', origin: 'International', type: ['Vegan'],                price: 7,  isFeatured: false, imageUrl: '/soft-003.webp', hasVideo: false },
  { id: 'soft-004', name: 'Fanta',          description: 'Soda à l\'orange, fruité et désaltérant.',     category: 'Boissons', subcategory: 'Soft Drinks', origin: 'International', type: ['Vegan'],                price: 7,  isFeatured: false, imageUrl: '/soft-004.webp', hasVideo: false },
  { id: 'soft-005', name: 'Boga',           description: 'Limonade tunisienne artisanale.',               category: 'Boissons', subcategory: 'Soft Drinks', origin: 'Tunisia',       type: ['Vegan'],                price: 7,  isFeatured: false, imageUrl: '/soft-005.webp', hasVideo: false },
  { id: 'soft-006', name: 'Apla',           description: 'Soda local frais et léger.',                    category: 'Boissons', subcategory: 'Soft Drinks', origin: 'Tunisia',       type: ['Vegan'],                price: 7,  isFeatured: false, imageUrl: '/soft-006.webp', hasVideo: false },
  { id: 'soft-007', name: 'Red Bull',       description: 'Boisson énergisante, goût intense.',            category: 'Boissons', subcategory: 'Soft Drinks', origin: 'International', type: ['Vegan'],                price: 15, isFeatured: false, imageUrl: '/soft-007.webp', hasVideo: false },
  { id: 'soft-008', name: 'Shark',          description: 'Boisson énergisante, effet boost.',              category: 'Boissons', subcategory: 'Soft Drinks', origin: 'International', type: ['Vegan'],                price: 15, isFeatured: false, imageUrl: '/soft-008.webp', hasVideo: false },

  /* ── BOISSONS · Vins Rouges ─────────────────────────────────────────────── */
  { id: 'vin-r-001', name: 'Magnifique',       description: 'Vin rouge tunisien, fruité et équilibré.',             category: 'Boissons', subcategory: 'Vins Rouges', origin: 'Tunisia', type: ['Alcoholic'], price: 85,  isFeatured: false, imageUrl: '/vin-r-001.webp', hasVideo: false },
  { id: 'vin-r-002', name: 'Magon Signature',  description: 'Cuvée prestige, arômes complexes et finale longue.',   category: 'Boissons', subcategory: 'Vins Rouges', origin: 'Tunisia', type: ['Alcoholic'], price: 120, isFeatured: true,  imageUrl: '/vin-r-002.webp', hasVideo: false },
  { id: 'vin-r-003', name: 'Qurebus',          description: 'Rouge de caractère, tannins soyeux.',                  category: 'Boissons', subcategory: 'Vins Rouges', origin: 'Tunisia', type: ['Alcoholic'], price: 110, isFeatured: false, imageUrl: '/vin-r-003.webp', hasVideo: false },
  { id: 'vin-r-004', name: 'Shadrapa',         description: 'Vin rouge aux notes épicées et de fruits noirs.',      category: 'Boissons', subcategory: 'Vins Rouges', origin: 'Tunisia', type: ['Alcoholic'], price: 95,  isFeatured: false, imageUrl: '/vin-r-004.webp', hasVideo: false },
  { id: 'vin-r-005', name: 'Phenicia',         description: 'Rouge souple et élégant, robe grenat.',                category: 'Boissons', subcategory: 'Vins Rouges', origin: 'Tunisia', type: ['Alcoholic'], price: 75,  isFeatured: false, imageUrl: '/vin-r-005.webp', hasVideo: false },
  { id: 'vin-r-006', name: 'Sidi Saad',        description: 'Vin de terroir, puissant et généreux.',                category: 'Boissons', subcategory: 'Vins Rouges', origin: 'Tunisia', type: ['Alcoholic'], price: 110, isFeatured: false, imageUrl: '/vin-r-006.webp', hasVideo: false },

  /* ── BOISSONS · Vins Rosés ──────────────────────────────────────────────── */
  { id: 'vin-ros-001', name: 'Désir',             description: 'Rosé frais et fruité aux notes de fruits rouges.',       category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 85,  isFeatured: false, imageUrl: '/vin-ros-001.webp', hasVideo: false },
  { id: 'vin-ros-002', name: 'Jour et Nuit',      description: 'Rosé élégant, robe saumonée, fraîcheur en bouche.',      category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 90,  isFeatured: true,  imageUrl: '/vin-ros-002.webp', hasVideo: false },
  { id: 'vin-ros-003', name: 'Magnifique',        description: 'Rosé fruité et léger, idéal en apéritif.',               category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 85,  isFeatured: false, imageUrl: '/vin-ros-003.webp', hasVideo: false },
  { id: 'vin-ros-004', name: 'Pétale',            description: 'Rosé délicat aux arômes floraux.',                       category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 75,  isFeatured: false, imageUrl: '/vin-ros-004.webp', hasVideo: false },
  { id: 'vin-ros-005', name: 'Crayzy',            description: 'Rosé audacieux, fruité et vif.',                         category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 125, isFeatured: false, imageUrl: '/vin-ros-005.webp', hasVideo: false },
  { id: 'vin-ros-006', name: 'Désir 1/2',         description: 'Demi-bouteille Désir rosé.',                             category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 50,  isFeatured: false, imageUrl: '/vin-ros-006.webp', hasVideo: false },
  { id: 'vin-ros-007', name: 'Soltane',           description: 'Rosé tunisien, sec et minéral.',                         category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 75,  isFeatured: false, imageUrl: '/vin-ros-007.webp', hasVideo: false },
  { id: 'vin-ros-008', name: 'Magnifique 1/2',    description: 'Demi-bouteille Magnifique rosé.',                        category: 'Boissons', subcategory: 'Vins Rosés', origin: 'Tunisia', type: ['Alcoholic'], price: 50,  isFeatured: false, imageUrl: '/vin-ros-008.webp', hasVideo: false },

  /* ── BOISSONS · Vins Blancs ─────────────────────────────────────────────── */
  { id: 'vin-b-001', name: 'Jour et Nuit',      description: 'Blanc sec et frais, notes d\'agrumes.',                  category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 90,  isFeatured: true,  imageUrl: '/vin-b-001.webp', hasVideo: false },
  { id: 'vin-b-002', name: 'Magnifique',        description: 'Blanc élégant, floral et légèrement beurré.',            category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 85,  isFeatured: false, imageUrl: '/vin-b-002.webp', hasVideo: false },
  { id: 'vin-b-003', name: 'Verdejo',           description: 'Cépage espagnol, vif et aromatique.',                    category: 'Boissons', subcategory: 'Vins Blancs', origin: 'International', type: ['Alcoholic'], price: 80,  isFeatured: false, imageUrl: '/vin-b-003.webp', hasVideo: false },
  { id: 'vin-b-004', name: 'Goia',              description: 'Blanc tunisien doux et fruité.',                         category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 100, isFeatured: false, imageUrl: '/vin-b-004.webp', hasVideo: false },
  { id: 'vin-b-005', name: 'Qurebus',           description: 'Blanc sec de caractère, belle minéralité.',              category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 110, isFeatured: false, imageUrl: '/vin-b-005.webp', hasVideo: false },
  { id: 'vin-b-006', name: 'Soltane',           description: 'Blanc frais et léger, idéal avec les fruits de mer.',    category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 75,  isFeatured: false, imageUrl: '/vin-b-006.webp', hasVideo: false },
  { id: 'vin-b-007', name: 'Jour et Nuit 1/2',  description: 'Demi-bouteille Jour et Nuit blanc.',                     category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 50,  isFeatured: false, imageUrl: '/vin-b-007.webp', hasVideo: false },
  { id: 'vin-b-008', name: 'Magnifique 1/2',    description: 'Demi-bouteille Magnifique blanc.',                       category: 'Boissons', subcategory: 'Vins Blancs', origin: 'Tunisia', type: ['Alcoholic'], price: 50,  isFeatured: false, imageUrl: '/vin-b-008.webp', hasVideo: false },

  /* ── BOISSONS · Vodka ───────────────────────────────────────────────────── */
  { id: 'vod-001', name: 'Absolut 1L',      description: 'Vodka suédoise premium, 40% vol.',                  category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 350, isFeatured: false, imageUrl: '/vod-001.webp', hasVideo: false },
  { id: 'vod-002', name: 'Smirnoff 1L',     description: 'Vodka triple distillée, pure et nette.',             category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 300, isFeatured: false, imageUrl: '/vod-002.webp', hasVideo: false },
  { id: 'vod-003', name: 'Belvedere 1L',    description: 'Vodka polonaise de luxe, texture soyeuse.',          category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 600, isFeatured: true,  imageUrl: '/vod-003.webp', hasVideo: false },
  { id: 'vod-004', name: 'Grey Goose 1L',   description: 'Vodka française haut de gamme, distillée en Cognac.',category: 'Boissons', subcategory: 'Vodka', origin: 'France',        type: ['Alcoholic'], price: 600, isFeatured: true,  imageUrl: '/vod-004.webp', hasVideo: false },
  { id: 'vod-005', name: 'Absolut 0,5L',    description: 'Vodka Absolut, format demi-bouteille.',              category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 190, isFeatured: false, imageUrl: '/vod-005.webp', hasVideo: false },
  { id: 'vod-006', name: 'Absolut 20cl',    description: 'Vodka Absolut, format individuel.',                  category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 80,  isFeatured: false, imageUrl: '/vod-006.webp', hasVideo: false },
  { id: 'vod-007', name: 'Absolut 5cl',     description: 'Vodka Absolut, format mignonnette.',                 category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 20,  isFeatured: false, imageUrl: '/vod-007.webp', hasVideo: false },
  { id: 'vod-008', name: 'Smirnoff 5cl',    description: 'Smirnoff, format mignonnette.',                      category: 'Boissons', subcategory: 'Vodka', origin: 'International', type: ['Alcoholic'], price: 18,  isFeatured: false, imageUrl: '/vod-008.webp', hasVideo: false },

  /* ── BOISSONS · Whisky ──────────────────────────────────────────────────── */
  { id: 'whi-001', name: 'Red Label 1L',      description: 'Johnnie Walker Red Label, blend emblématique.',      category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 380, isFeatured: false, imageUrl: '/whi-001.webp', hasVideo: false },
  { id: 'whi-002', name: 'Red Label 0,5L',    description: 'Johnnie Walker Red Label, demi-bouteille.',          category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 210, isFeatured: false, imageUrl: '/whi-002.webp', hasVideo: false },
  { id: 'whi-003', name: 'Red Label 5cl',     description: 'Johnnie Walker Red Label, mignonnette.',             category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 20,  isFeatured: false, imageUrl: '/whi-003.webp', hasVideo: false },
  { id: 'whi-004', name: 'Black Label 1L',    description: 'Johnnie Walker Black Label, 12 ans d\'âge.',         category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 600, isFeatured: true,  imageUrl: '/whi-004.webp', hasVideo: false },
  { id: 'whi-005', name: 'Black Label 0,5L',  description: 'Johnnie Walker Black Label, demi-bouteille.',        category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 330, isFeatured: false, imageUrl: '/whi-005.webp', hasVideo: false },
  { id: 'whi-006', name: 'Black Label 5cl',   description: 'Johnnie Walker Black Label, mignonnette.',           category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 30,  isFeatured: false, imageUrl: '/whi-006.webp', hasVideo: false },
  { id: 'whi-007', name: 'Chivas 1L',         description: 'Chivas Regal 12 ans, blend scotch premium.',         category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 600, isFeatured: true,  imageUrl: '/whi-007.webp', hasVideo: false },
  { id: 'whi-008', name: 'Jack Daniel\'s',    description: 'Tennessee Whiskey, doux et vanillé.',                category: 'Boissons', subcategory: 'Whisky', origin: 'International', type: ['Alcoholic'], price: 600, isFeatured: false, imageUrl: '/whi-008.webp', hasVideo: false },

  /* ── BOISSONS · Gin ─────────────────────────────────────────────────────── */
  { id: 'gin-001', name: 'Gordon\'s 1L',       description: 'Gin londonien classique, notes de genièvre.',        category: 'Boissons', subcategory: 'Gin', origin: 'International', type: ['Alcoholic'], price: 300, isFeatured: false, imageUrl: '/gin-001.webp', hasVideo: false },
  { id: 'gin-002', name: 'Gordon\'s 5cl',      description: 'Gordon\'s Gin, format mignonnette.',                 category: 'Boissons', subcategory: 'Gin', origin: 'International', type: ['Alcoholic'], price: 20,  isFeatured: false, imageUrl: '/gin-002.webp', hasVideo: false },
  { id: 'gin-003', name: 'Bombay 1L',          description: 'Bombay Sapphire, gin infusé à 10 botaniques.',       category: 'Boissons', subcategory: 'Gin', origin: 'International', type: ['Alcoholic'], price: 400, isFeatured: true,  imageUrl: '/gin-003.webp', hasVideo: false },
  { id: 'gin-004', name: 'Bombay 5cl',         description: 'Bombay Sapphire, format mignonnette.',               category: 'Boissons', subcategory: 'Gin', origin: 'International', type: ['Alcoholic'], price: 40,  isFeatured: false, imageUrl: '/gin-004.webp', hasVideo: false },
  { id: 'gin-005', name: 'Tanqueray 1L',       description: 'Gin britannique de prestige, quadruple distillé.',   category: 'Boissons', subcategory: 'Gin', origin: 'International', type: ['Alcoholic'], price: 320, isFeatured: false, imageUrl: '/gin-005.webp', hasVideo: false },
  { id: 'gin-006', name: 'Tanqueray 5cl',      description: 'Tanqueray Gin, format mignonnette.',                 category: 'Boissons', subcategory: 'Gin', origin: 'International', type: ['Alcoholic'], price: 18,  isFeatured: false, imageUrl: '/gin-006.webp', hasVideo: false },

  /* ── CUISINE · Entrées Froides ─────────────────────────────────────────── */
  {
    id: 'ef-001',
    name: 'Salade Méchouia',
    description: 'Poivrons, tomates, ail et oignons grillés, thon et œufs.',
    category: 'Cuisine', subcategory: 'Entrées Froides',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 18,
    isFeatured: true,  imageUrl: '/ef-001.webp', hasVideo: false,
  },
  {
    id: 'ef-002',
    name: 'Salade Tunisienne',
    description: 'Tomates, concombre, poivrons, oignons, huile d\'olive et citron.',
    category: 'Cuisine', subcategory: 'Entrées Froides',
    origin: 'Tunisia', type: ['Vegan', 'Gluten-Free'], price: 14,
    isFeatured: false, imageUrl: '/ef-002.webp', hasVideo: false,
  },
  {
    id: 'ef-003',
    name: 'Sardines Marinées',
    description: 'Sardines fraîches, jus de citron, huile d\'olive.',
    category: 'Cuisine', subcategory: 'Entrées Froides',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 18,
    isFeatured: false, imageUrl: '/ef-003.webp', hasVideo: false,
  },
  {
    id: 'ef-004',
    name: 'Symphonie Marine',
    description: 'Crevette, seiche, moules, laitue, roquette, tomates cerises, jus de citron, huile d\'olive.',
    category: 'Cuisine', subcategory: 'Entrées Froides',
    origin: 'Mediterranean', type: ['Gluten-Free'], price: 32,
    isFeatured: true,  imageUrl: '/ef-004.webp', hasVideo: false,
  },

  /* ── CUISINE · Entrées Chaudes ──────────────────────────────────────────── */
  {
    id: 'ec-001',
    name: 'Ojja Merguez',
    description: 'Œufs pochés en sauce tomate épicée, merguez grillées.',
    category: 'Cuisine', subcategory: 'Entrées Chaudes',
    origin: 'Tunisia', type: [], price: 24,
    isFeatured: false, imageUrl: '/ec-001.webp', hasVideo: false,
  },
  {
    id: 'ec-002',
    name: 'Ojja Chevrettes',
    description: 'Œufs pochés en sauce tomate épicée, chevrettes sautées.',
    category: 'Cuisine', subcategory: 'Entrées Chaudes',
    origin: 'Tunisia', type: [], price: 32,
    isFeatured: true,  imageUrl: '/ec-002.webp', hasVideo: false,
  },
  {
    id: 'ec-003',
    name: 'Kafteji Merguez',
    description: 'Légumes frits, œuf, merguez, servis en sauce tomate.',
    category: 'Cuisine', subcategory: 'Entrées Chaudes',
    origin: 'Tunisia', type: [], price: 24,
    isFeatured: false, imageUrl: '/ec-003.webp', hasVideo: false,
  },
  {
    id: 'ec-004',
    name: 'Kafteji Kebda',
    description: 'Légumes frits, kebda (foie) sauté aux épices tunisiennes.',
    category: 'Cuisine', subcategory: 'Entrées Chaudes',
    origin: 'Tunisia', type: [], price: 28,
    isFeatured: false, imageUrl: '/ec-004.webp', hasVideo: false,
  },

  /* ── CUISINE · Assortiment Tajine ───────────────────────────────────────── */
  {
    id: 'taj-001',
    name: 'Assortiment Tajine',
    description: 'Assortiment de 3 variétés : Tajin Sebnekh (épinard, fromage, ricotta), Tajin Malsouka (poulet, fromage), Tajin Salade Méchouia (thon, salade méchouia). 6 pièces.',
    category: 'Cuisine', subcategory: 'Assortiment Tajine',
    origin: 'Tunisia', type: [], price: 30,
    isFeatured: true, imageUrl: '/taj-001.webp', hasVideo: false,
  },

  /* ── CUISINE · Assortiment Brik ─────────────────────────────────────────── */
  {
    id: 'brk-001',
    name: 'Doigt de Fatma',
    description: 'Rouleau de brick croustillant farci, servi chaud. Assortiment 6 pièces.',
    category: 'Cuisine', subcategory: 'Assortiment Brik',
    origin: 'Tunisia', type: [], price: 24,
    isFeatured: false, imageUrl: '/brk-001.webp', hasVideo: false,
  },
  {
    id: 'brk-002',
    name: 'Brik Danouni',
    description: 'Brick tunisien garni, façon Danouni. Assortiment 6 pièces.',
    category: 'Cuisine', subcategory: 'Assortiment Brik',
    origin: 'Tunisia', type: [], price: 24,
    isFeatured: true,  imageUrl: '/brk-002.webp', hasVideo: false,
  },
  {
    id: 'brk-003',
    name: 'Banadhaj',
    description: 'Brick farci aux légumes et épices tunisiennes. Assortiment 6 pièces.',
    category: 'Cuisine', subcategory: 'Assortiment Brik',
    origin: 'Tunisia', type: [], price: 24,
    isFeatured: false, imageUrl: '/brk-003.webp', hasVideo: false,
  },

  /* ── CUISINE · Suites ───────────────────────────────────────────────────── */
  {
    id: 'sui-001',
    name: 'Madfouna aux Boulettes de Bœuf',
    description: 'Pain traditionnel farci aux boulettes de bœuf épicées, cuit au four.',
    category: 'Cuisine', subcategory: 'Suites',
    origin: 'Tunisia', type: [], price: 28,
    isFeatured: true,  imageUrl: '/sui-001.webp', hasVideo: false,
  },
  {
    id: 'sui-002',
    name: 'Klaya Agneau',
    description: 'Épaule d\'agneau mijotée aux épices, servi avec pain traditionnel.',
    category: 'Cuisine', subcategory: 'Suites',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 36,
    isFeatured: false, imageUrl: '/sui-002.webp', hasVideo: false,
  },
  {
    id: 'sui-003',
    name: 'Kamounia',
    description: 'Viande de bœuf, foies, rognons mijotés au cumin et épices tunisiennes.',
    category: 'Cuisine', subcategory: 'Suites',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 32,
    isFeatured: false, imageUrl: '/sui-003.webp', hasVideo: false,
  },
  {
    id: 'sui-004',
    name: 'Mokli Weld Bhar',
    description: 'Poisson du jour frit, servi avec salade et pain.',
    category: 'Cuisine', subcategory: 'Suites',
    origin: 'Tunisia', type: [], price: 42,
    isFeatured: true,  imageUrl: '/sui-004.webp', hasVideo: false,
  },

  /* ── CUISINE · Nos Viandes ──────────────────────────────────────────────── */
  {
    id: 'via-001',
    name: 'T-Bone Steak',
    description: 'T-bone grillé, bol de salade & pommes de terre bravs.',
    category: 'Cuisine', subcategory: 'Nos Viandes',
    origin: 'International', type: ['Gluten-Free'], price: 65,
    isFeatured: true,  imageUrl: '/via-001.webp', hasVideo: false,
  },
  {
    id: 'via-002',
    name: 'Côte à l\'Os',
    description: 'Côte de bœuf grillée, bol de salade & pommes de terre bravs.',
    category: 'Cuisine', subcategory: 'Nos Viandes',
    origin: 'International', type: ['Gluten-Free'], price: 65,
    isFeatured: false, imageUrl: '/via-002.webp', hasVideo: false,
  },
  {
    id: 'via-003',
    name: 'Poulet Émincé à la Crème de Truffe',
    description: 'Émincé de poulet, sauce crème de truffe, bol de salade & pommes de terre bravs.',
    category: 'Cuisine', subcategory: 'Nos Viandes',
    origin: 'Mediterranean', type: [], price: 40,
    isFeatured: true,  imageUrl: '/via-003.webp', hasVideo: false,
  },
  {
    id: 'via-004',
    name: 'Safoudia Bagri',
    description: 'Viande de bœuf en sauce safoudia, bol de salade & pommes de terre bravs.',
    category: 'Cuisine', subcategory: 'Nos Viandes',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 42,
    isFeatured: false, imageUrl: '/via-004.webp', hasVideo: false,
  },
  {
    id: 'via-005',
    name: 'Safoudia Poulet',
    description: 'Poulet en sauce safoudia, bol de salade & pommes de terre bravs.',
    category: 'Cuisine', subcategory: 'Nos Viandes',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 34,
    isFeatured: false, imageUrl: '/via-005.webp', hasVideo: false,
  },

  /* ── CUISINE · Pizza ────────────────────────────────────────────────────── */
  {
    id: 'piz-001',
    name: 'Pizza Nokhet Lebled',
    description: 'Salade méchouia, œuf, merguez séché.',
    category: 'Cuisine', subcategory: 'Pizza',
    origin: 'Tunisia', type: [], price: 32,
    isFeatured: true,  imageUrl: '/piz-001.webp', hasVideo: false,
  },
  {
    id: 'piz-002',
    name: 'Pizza Halk Lwed',
    description: 'Sauce tomate, fromage sicilien, thon, œuf, piment de cayenne.',
    category: 'Cuisine', subcategory: 'Pizza',
    origin: 'Mediterranean', type: [], price: 32,
    isFeatured: false, imageUrl: '/piz-002.webp', hasVideo: false,
  },

  /* ── CUISINE · Les Pâtes ────────────────────────────────────────────────── */
  {
    id: 'pat-001',
    name: 'Fell Mérou',
    description: 'Pâtes au mérou, sauce méditerranéenne aux herbes fraîches.',
    category: 'Cuisine', subcategory: 'Les Pâtes',
    origin: 'Mediterranean', type: [], price: 34,
    isFeatured: true,  imageUrl: '/pat-001.webp', hasVideo: false,
  },
  {
    id: 'pat-002',
    name: 'Fell Boulette',
    description: 'Pâtes aux boulettes de viande en sauce tomate maison.',
    category: 'Cuisine', subcategory: 'Les Pâtes',
    origin: 'Tunisia', type: [], price: 26,
    isFeatured: false, imageUrl: '/pat-002.webp', hasVideo: false,
  },
  {
    id: 'pat-003',
    name: 'Spaghetti Fruits de Mer',
    description: 'Spaghetti, fruits de mer, sauce tomate et herbes fraîches.',
    category: 'Cuisine', subcategory: 'Les Pâtes',
    origin: 'Mediterranean', type: [], price: 38,
    isFeatured: true,  imageUrl: '/pat-003.webp', hasVideo: false,
  },
  {
    id: 'pat-004',
    name: 'Penne Arrabiata',
    description: 'Penne en sauce arrabiata, tomate, ail et piment.',
    category: 'Cuisine', subcategory: 'Les Pâtes',
    origin: 'Italian', type: ['Vegan'], price: 22,
    isFeatured: false, imageUrl: '/pat-004.webp', hasVideo: false,
  },
  {
    id: 'pat-005',
    name: 'Penne Cinq Fromages',
    description: 'Penne gratinées, sauce crémeuse aux cinq fromages.',
    category: 'Cuisine', subcategory: 'Les Pâtes',
    origin: 'Italian', type: ['Vegetarian'], price: 29,
    isFeatured: false, imageUrl: '/pat-005.webp', hasVideo: false,
  },

  /* ── CUISINE · Desserts ─────────────────────────────────────────────────── */
  {
    id: 'des-001',
    name: 'Kobzet Hwé Noisette',
    description: 'Douceur tunisienne à la noisette, texture fondante et croquante.',
    category: 'Cuisine', subcategory: 'Desserts',
    origin: 'Tunisia', type: ['Vegetarian'], price: 14,
    isFeatured: true,  imageUrl: '/des-001.webp', hasVideo: false,
  },
  {
    id: 'des-002',
    name: 'Fondant Chocolat',
    description: 'Cœur coulant au chocolat noir, servi tiède.',
    category: 'Cuisine', subcategory: 'Desserts',
    origin: 'International', type: ['Vegetarian'], price: 16,
    isFeatured: false, imageUrl: '/des-002.webp', hasVideo: false,
  },
  {
    id: 'des-003',
    name: 'Fruits de Saison',
    description: 'Sélection de fruits frais de saison.',
    category: 'Cuisine', subcategory: 'Desserts',
    origin: 'Mediterranean', type: ['Vegan', 'Gluten-Free'], price: 48,
    isFeatured: false, imageUrl: '/des-003.webp', hasVideo: false,
  },

  /* ── TAPAS ──────────────────────────────────────────────────────────────── */
  {
    id: 'tap-001',
    name: 'Calamars Frits',
    description: 'Calamars frits croustillants, servis avec sauce maison.',
    category: 'Tapas', subcategory: 'Tapas',
    origin: 'Mediterranean', type: [], price: 34,
    isFeatured: true,  imageUrl: '/tap-001.webp', hasVideo: false,
  },
  {
    id: 'tap-002',
    name: 'Seiches Sautées',
    description: 'Seiches sautées à la poêle, épices et herbes fraîches.',
    category: 'Tapas', subcategory: 'Tapas',
    origin: 'Mediterranean', type: ['Gluten-Free'], price: 38,
    isFeatured: false, imageUrl: '/tap-002.webp', hasVideo: false,
  },
  {
    id: 'tap-003',
    name: 'Crevettes Pannées',
    description: 'Crevettes en panure croustillante, sauce tartare maison.',
    category: 'Tapas', subcategory: 'Tapas',
    origin: 'Mediterranean', type: [], price: 38,
    isFeatured: false, imageUrl: '/tap-003.webp', hasVideo: false,
  },
  {
    id: 'tap-004',
    name: 'Calamars Pannés',
    description: 'Anneaux de calamars panés, dorés et croustillants.',
    category: 'Tapas', subcategory: 'Tapas',
    origin: 'Mediterranean', type: [], price: 35,
    isFeatured: false, imageUrl: '/tap-004.webp', hasVideo: false,
  },
  {
    id: 'tap-005',
    name: 'Crevettes Safseri',
    description: 'Crevettes façon safseri, épices tunisiennes et herbes fraîches.',
    category: 'Tapas', subcategory: 'Tapas',
    origin: 'Tunisia', type: ['Gluten-Free'], price: 45,
    isFeatured: true,  imageUrl: '/tap-005.webp', hasVideo: false,
  },
  {
    id: 'tap-006',
    name: 'Friture de Rouget',
    description: 'Rougets frits entiers, citron frais et herbes.',
    category: 'Tapas', subcategory: 'Tapas',
    origin: 'Mediterranean', type: [], price: 38,
    isFeatured: true,  imageUrl: '/tap-006.webp', hasVideo: false,
  },
]

export const CATEGORIES  = ['Boissons', 'Cuisine', 'Tapas', 'Cocktails']

export const SUBCATS = {
  Boissons:  ['Bières', 'Soft Drinks', 'Vins Rouges', 'Vins Rosés', 'Vins Blancs', 'Vodka', 'Whisky', 'Gin'],
  Cuisine:   ['Entrées Froides', 'Entrées Chaudes', 'Assortiment Tajine', 'Assortiment Brik', 'Suites', 'Nos Viandes', 'Pizza', 'Les Pâtes', 'Desserts'],
  Tapas:     [],
  Cocktails: ['Shoots', 'Cocktail Signature', 'Destination Cocktail', 'Notre Cocktail'],
}

export const ORIGINS  = ['Tunisia', 'France', 'Mediterranean', 'Italian', 'International']
export const DIETS    = ['Vegetarian', 'Vegan', 'Gluten-Free']
