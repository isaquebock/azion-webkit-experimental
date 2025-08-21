export const mainMenu = {
items: [
    {
    label: 'Solutions',
    href: '/pt-br/solucoes/'
    },
    {
    label: 'Products',
    ref: 'productsPanel',
    items: [
        {
            label: 'Platform',
            icon: '',
            description: 'Build, secure and scale applications',
            href: '/pt-br/produtos/platform/',
            items: [
                {
                icon: 'ai ai-edge-storage',
                label: 'Overview',
                description:
                    'Platform overview description here',
                href: '/pt-br/'
                },
                {
                icon: 'ai ai-edge-kv',
                label: 'Our Network',
                description:
                    'Network description here',
                href: '/pt-br/'
                },
            ]
        },
        {
            label: 'Store',
            icon: '',
            description: 'Data storage solutions',
            href: '/pt-br/produtos/store/',
            items: [
                {
                icon: 'ai ai-sql-database',
                label: 'SQL Database',
                description:
                    'SQL Database description here',
                href: '/pt-br/'
                },
                {
                icon: 'ai ai-kv-store',
                label: 'KV Store',
                description:
                    'KV Store description here',
                href: '/pt-br/'
                },
                {
                icon: 'ai ai-object-storage',
                label: 'Object Storage',
                description:
                    'Object Storage description here',
                href: '/pt-br/'
                }
            ]
        },
        {
        label: 'Build',
        icon: '',
        description: 'Application development and deployment',
        href: '/pt-br/produtos/build/',
        items: [
            {
            icon: 'ai ai-application-accelerator',
            label: 'Application Accelerator',
            description:
                'Application Accelerator description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-edge-functions',
            label: 'Functions',
            description:
                'Functions description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-edge-cache',
            label: 'Cache',
            description:
                'Cache description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-image-processor',
            label: 'Image Processor',
            description:
                'Image Processor description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-live-ingest',
            label: 'Live Ingest',
            description:
                'Live Ingest description here',
            href: '/pt-br/'
            }
        ]
        },
        {
        label: 'AI',
        icon: '',
        description: 'Artificial Intelligence solutions',
        href: '/pt-br/produtos/ai/',
        items: [
            {
            icon: 'ai ai-ai-studio',
            label: 'AI Studio',
            description:
                'AI Studio description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-ai-inference',
            label: 'AI Inference (Edge AI)',
            description:
                'AI Inference description here',
            href: '/pt-br/'
            }
        ]
        },
        {
        label: 'Secure',
        icon: '',
        description: 'Security and protection services',
        href: '/pt-br/produtos/secure/',
        items: [
            {
            icon: 'ai ai-network-layer-protection',
            label: 'Network Layer Protection',
            description:
                'Network Layer Protection description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-web-application-firewall',
            label: 'Web Application Firewall (WAF)',
            description:
                'Web Application Firewall description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-bot-manager',
            label: 'Bot Manager',
            description:
                'Bot Manager description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-edge-dns',
            label: 'Edge DNS',
            description:
                'Edge DNS description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-load-balancer',
            label: 'Load Balancer',
            description:
                'Load Balancer description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-origin-shield',
            label: 'Origin Shield',
            description:
                'Origin Shield description here',
            href: '/pt-br/'
            }
        ]
        },
        {
        label: 'Observe',
        icon: '',
        description: 'Monitoring and analytics',
        href: '/pt-br/produtos/observe/',
        items: [
            {
            icon: 'ai ai-real-time-events',
            label: 'Real-Time Events',
            description:
                'Real-Time Events description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-data-stream',
            label: 'Data Stream',
            description:
                'Data Stream description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-real-time-metrics',
            label: 'Real-Time Metrics',
            description:
                'Real-Time Metrics description here',
            href: '/pt-br/'
            },
            {
            icon: 'ai ai-edge-pulse',
            label: 'Edge Pulse',
            description:
                'Edge Pulse description here',
            href: '/pt-br/'
            }
        ]
        },
    ],
    },
    {
    label: 'Clientes',
    href: '/pt-br/casos-de-sucesso/',
    items: []
    },
    {
    label: 'Resources',
    ref: 'resourcesPanel',
    items: [
        {
        label: 'Blog',
        items: [
            {
            icon: 'pi pi-play',
            label: 'Azion Docs',
            description:
                'Nossa página de documentação ajudará você a começar com a Plataforma Web da Azion.',
            href: '/pt-br/documentacao/'
            },
            {
            icon: 'pi pi-map',
            label: 'Resources Hub',
            description: 'Descubra nossos guias que irão ajudá-lo na Plataforma Web da Azion.',
            href: '/pt-br/documentacao/produtos/guias/'
            },
            {
            icon: 'pi pi-wrench',
            label: 'Marketplace',
            description: 'Descubra nossas ferramentas para desenvolvedores.',
            href: '/pt-br/documentacao/produtos/dev-tools/'
            },
            {
            icon: 'pi pi-code',
            label: 'Community',
            description:
                'Documentação que irá orientá-lo nos primeiros passos para usar a API da Azion.',
            href: 'https://api.azion.com/'
            }
        ]
        },
    ],
    rightBlock: {
        label: 'Destaque',
        type: 'featured',
        items: [
        {
            img: {
            src: '/assets/blog/images/uploads/thumbnailblog-4templatesimproveexperience-440x343px-1.png',
            alt: 'Aproveite o poder do edge computing com o novo conjunto de templates da Azion'
            },
            title: 'Aproveite o poder do edge computing com o novo conjunto de templates da Azion',
            description:
            'Explore as ferramentas intuitivas para desenvolvedores da Azion. Simplifi...',
            link: {
            href: '/pt-br/blog/novo-conjunto-templates-azion-dev/',
            label: 'Ler artigo'
            }
        }
        ]
    }
    },
    {
    label: 'Developers',
    href: '/pt-br/',
    items: [
        {
        label: 'Docs',
        href: '/pt-br/'
        },
        {
        label: 'Guides',
        href: '/pt-br/' 
        },
        {
        label: 'Dev Tools',
        href: '/pt-br/' 
        },
        {
        label: 'API',
        href: '/pt-br/' 
        },
        {
        label: 'Releases Notes',
        href: '/pt-br/' 
        }
    ]
    },
    {
    label: 'Pricing',
    href: '/pt-br/'
    }
]
}

export const menu = {
    menu: [
        {
            label: 'Solutions',
            href: '/pt-br/solucoes/'
        },
        {
            label: 'Products',
            href: '/pt-br/produtos/',
            ref: 'productsPanel',
            subMenuColumns: [
                [
                    {
                        label: 'Platform',
                        icon: '',
                        description: 'Build, secure and scale applications',
                        href: '/pt-br/produtos/platform/',
                        items: [
                            {
                            icon: 'ai ai-edge-storage',
                            label: 'Overview',
                            description:
                                'Platform overview description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-edge-kv',
                            label: 'Our Network',
                            description:
                                'Network description here',
                            href: '/pt-br/'
                            },
                        ]
                    },
                    {   
                        label: 'Store',
                        icon: '',
                        description: 'Data storage solutions',
                        href: '/pt-br/produtos/store/',
                        items: [
                            {
                            icon: 'ai ai-sql-database',
                            label: 'SQL Database',
                            description:
                                'SQL Database description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-kv-store',
                            label: 'KV Store',
                            description:
                                'KV Store description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-object-storage',
                            label: 'Object Storage',
                            description:
                                'Object Storage description here',
                            href: '/pt-br/'
                            }
                        ]
                    },
                ],
                {
                    label: 'Build',
                    icon: '',
                    description: 'Application development and deployment',
                    href: '/pt-br/produtos/build/',
                    items: [
                        {
                        icon: 'ai ai-application-accelerator',
                        label: 'Application Accelerator',
                        description:
                            'Application Accelerator description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-functions',
                        label: 'Functions',
                        description:
                            'Functions description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-cache',
                        label: 'Cache',
                        description:
                            'Cache description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-image-processor',
                        label: 'Image Processor',
                        description:
                            'Image Processor description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-live-ingest',
                        label: 'Live Ingest',
                        description:
                            'Live Ingest description here',
                        href: '/pt-br/'
                        }
                    ]
                },
                [
                    {
                        label: 'AI',
                        icon: '',
                        description: 'Artificial Intelligence solutions',
                        href: '/pt-br/produtos/ai/',
                        items: [
                            {
                            icon: 'ai ai-ai-studio',
                            label: 'AI Studio',
                            description:
                                'AI Studio description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-ai-inference',
                            label: 'AI Inference (Edge AI)',
                            description:
                                'AI Inference description here',
                            href: '/pt-br/'
                            }
                        ]
                    },
                    {
                        label: 'Observe',
                        icon: '',
                        description: 'Monitoring and analytics',
                        href: '/pt-br/produtos/observe/',
                        items: [
                            {
                            icon: 'ai ai-real-time-events',
                            label: 'Real-Time Events',
                            description:
                                'Real-Time Events description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-data-stream',
                            label: 'Data Stream',
                            description:
                                'Data Stream description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-real-time-metrics',
                            label: 'Real-Time Metrics',
                            description:
                                'Real-Time Metrics description here',
                            href: '/pt-br/'
                            },
                            {
                            icon: 'ai ai-edge-pulse',
                            label: 'Edge Pulse',
                            description:
                                'Edge Pulse description here',
                            href: '/pt-br/'
                            }
                        ]
                    },
                ],
                {
                    label: 'Secure',
                    icon: '',
                    description: 'Security and protection services',
                    href: '/pt-br/produtos/secure/',
                    items: [
                        {
                        icon: 'ai ai-network-layer-protection',
                        label: 'Network Layer Protection',
                        description:
                            'Network Layer Protection description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-web-application-firewall',
                        label: 'Web Application Firewall (WAF)',
                        description:
                            'Web Application Firewall description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-bot-manager',
                        label: 'Bot Manager',
                        description:
                            'Bot Manager description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-dns',
                        label: 'Edge DNS',
                        description:
                            'Edge DNS description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-load-balancer',
                        label: 'Load Balancer',
                        description:
                            'Load Balancer description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-origin-shield',
                        label: 'Origin Shield',
                        description:
                            'Origin Shield description here',
                        href: '/pt-br/'
                        }
                    ]
                },
            ]
        },
        {
            label: 'Clients',
            href: '/pt-br/solucoes/'
        },
        {
            label: 'Developer',
            ref: 'developersPanel',
            href: '/pt-br/solucoes/',
            subMenuColumns: [
                {
                    label: 'Docs',
                    icon: '',
                    description: 'Application development and deployment',
                    href: '/pt-br/produtos/build/',
                    items: [
                        {
                        icon: 'ai ai-application-accelerator',
                        label: 'Welcome to Azion Docs',
                        description:
                            'Edge growth, scalability, performance, and security.',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-functions',
                        label: 'Guides',
                        description:
                            'Guides description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-cache',
                        label: 'Dev Tools',
                        description:
                            'Dev Tools description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-image-processor',
                        label: 'Release Notes',
                        description:
                            'Image Processor description here',
                        href: '/pt-br/'
                        }
                    ]
                },
                {
                    label: 'Docs',
                    icon: '',
                    description: 'Application development and deployment',
                    href: '/pt-br/produtos/build/',
                    items: [
                        {
                        icon: 'ai ai-application-accelerator',
                        label: 'Welcome to Azion Docs',
                        description:
                            'Edge growth, scalability, performance, and security.',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-functions',
                        label: 'Guides',
                        description:
                            'Guides description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-cache',
                        label: 'Dev Tools',
                        description:
                            'Dev Tools description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-image-processor',
                        label: 'Release Notes',
                        description:
                            'Image Processor description here',
                        href: '/pt-br/'
                        }
                    ]
                },
            ]
        },
        {
            label: 'Resources',
            href: '/pt-br/solucoes/',
            ref: 'resourcesPanel',
            subMenuColumns: [
                {
                    label: 'Content',
                    icon: '',
                    description: 'Application development and deployment',
                    href: '/pt-br/produtos/build/',
                    items: [
                        {
                        icon: 'ai ai-application-accelerator',
                        label: 'Welcome to Azion Docs',
                        description:
                            'Edge growth, scalability, performance, and security.',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-functions',
                        label: 'Guides',
                        description:
                            'Guides description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-edge-cache',
                        label: 'Dev Tools',
                        description:
                            'Dev Tools description here',
                        href: '/pt-br/'
                        },
                        {
                        icon: 'ai ai-image-processor',
                        label: 'Release Notes',
                        description:
                            'Image Processor description here',
                        href: '/pt-br/'
                        }
                    ]
                },
            ]
        },
        {
            label: 'Pricing',
            href: '/pt-br/solucoes/'
        },
    ]
}

export const secondaryMenu = [
    {
    text: 'Request an Expert',
    title: 'Request an Expert',
    link: '/pt-br/lp/emergencia-ataque-cibernetico/',
    target: '_self',
    },
    {
    text: 'Sign In',
    title: 'Sign In',
    link: 'https://console.azion.com/login',
    target: '_blank',
    }
]

export const mobileSecondaryMenu = [
    {
    items: [
        {
        label: 'Carreiras',
        tags: ['estamos contratando'],
        url: '/pt-br/carreiras/'
        },
        {
        label: 'Suporte',
        url: '/pt-br/precos/'
        },
        {
        label: 'Política de privacidade',
        url: '/pt-br/documentacao/contratos/politica-de-privacidade/'
        }
    ]
    }
]

export const mobileBottomButtons = [
    {
    label: 'Conta gratuita',
    urlTitle: 'Azion Console Conta Gratuita',
    url: 'https://console.azion.com/singup',
    destak: true
    },
    {
    label: 'Sign In',
    urlTitle: 'Azion Console Sign In',
    url: 'https://console.azion.com/login'
    },
    {
    label: 'Contato',
    url: '/pt-br/contate-vendas/',
    urlTitle: 'Contact Page',
    icon: 'pi pi-chevron-right text-xs'
    }
]

export const algoliaIndex = [
    {
    name: `azion-site-ptbr`,
    label: 'site',
    activeIndex: 1
    },
    {
    name: `azion-doc-ptbr`,
    label: 'docs',
    activeIndex: 2
    },
    {
    name: `azion-blog-ptbr`,
    label: 'blog',
    activeIndex: 3
    },
    {
    name: `azion-cases-ptbr`,
    label: 'cases',
    activeIndex: 4
    }
]

export const algoliaModel = [
    { label: 'All' },
    { label: 'Site' },
    { label: 'Docs' },
    { label: 'Blog' },
    { label: 'Cases' }
]

export const algoliaInputPlaceholder = 'Digite sua busca'
  
  