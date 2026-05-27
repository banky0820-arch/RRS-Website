export const paymentsContent = {
  landing: {
    headline: 'Your account with Resort Recovery Solutions',
    subhead: 'Whatever your situation, we\'ll work with you to find a resolution.',
    miniMiranda:
      'This communication is from a debt collector. This is an attempt to collect a debt, and any information obtained will be used for that purpose.',
    cards: [
      {
        id: 'pay',
        icon: 'CreditCard',
        title: 'Consumer Payment Portal',
        description: 'Make a payment online through our secure payment processor.',
        cta: 'Pay now',
        href: 'https://intelligentnegotiator.com/resortrecoveryllc/',
        isExternal: true,
      },
      {
        id: 'plan',
        icon: 'CalendarDays',
        title: 'Ways to resolve your account',
        description: '',
        items: [
          'Payment plan — arrange a payment schedule that fits your situation',
          'Settlement — resolve the balance for less than the full amount owed (subject to client approval)',
          'Deed-back — transfer ownership of your timeshare back to the resort, where eligible',
        ],
        footer: "Call us to discuss which option works for you. We're here to help.",
        cta: '(888) 552-4817',
        href: 'tel:8885524817',
        isPhone: true,
      },
    ],
    rightsBanner: {
      text: 'Know your rights, including how to dispute this debt.',
      linkLabel: 'Learn about your rights →',
      href: '/payments/rights',
    },
    contact: {
      phone: '(888) 552-4817',
      hours: 'Monday–Friday, 8:00 AM – 5:00 PM PST',
      address: 'Resort Recovery Solutions, LLC\nPO Box 23625\nSan Diego, CA 92193',
    },
  },

  pay: {
    headline: 'Make a payment',
    body: 'You will be redirected to our secure payment processor. Have your account number ready.',
    processorNotice:
      'Payments are processed through a third-party secure payment portal. Resort Recovery Solutions does not store payment card information.',
    redirectNote: '[PAYMENT PROCESSOR INTEGRATION — REDIRECT TO SECURE PROCESSOR]',
  },

  rights: {
    headline: 'Your rights as a consumer',
    intro:
      'Federal law gives you specific rights when a debt collector contacts you. Please read this page carefully.',
    miniMiranda:
      'This communication is from a debt collector. This is an attempt to collect a debt, and any information obtained will be used for that purpose.',

    fdcpa: {
      headline: 'The Fair Debt Collection Practices Act (FDCPA)',
      body: 'The FDCPA is a federal law that limits how, when, and how often debt collectors may contact you. Under the FDCPA, you have the right to:',
      rights: [
        'Request that the debt collector stop contacting you',
        'Dispute the debt and request verification',
        'Request the name and address of the original creditor',
        'Not be contacted at inconvenient times or places',
        'Not be subjected to harassment, false statements, or unfair practices',
      ],
      disclosure:
        '',
    },

    dispute: {
      headline: 'How to dispute this debt',
      intro:
        'If you believe this debt is not owed, the amount is incorrect, or you want proof of the debt, you have the right to dispute it.',
      thirtyDayNotice:
        'If you notify us in writing within 30 days of receiving your initial communication, we are required by law to stop collection activity and provide you with verification of the debt or the name and address of the original creditor before resuming collection.',
      methods: [
        {
          method: 'By mail (written dispute)',
          detail:
            'Send your dispute to the address below. Written disputes provide the strongest protection under 15 U.S.C. § 1692g. Include your name, account number (if known), and a clear statement that you dispute the debt or portion thereof.',
          address: [
            'Resort Recovery Solutions, LLC',
            'Attn: Disputes',
            'PO Box 23625',
            'San Diego, CA 92193',
          ],
          note: 'We recommend sending disputes by certified mail with return receipt so you have proof of delivery and the date sent.',
        },
        {
          method: 'By phone',
          detail:
            'You may also call us to verbally dispute the debt or request information about the original creditor. Note that verbal disputes do not trigger the written verification requirement under § 1692g — a written dispute provides stronger protections.',
          phone: '(888) 552-4817',
          hours: 'Monday–Friday, 8:00 AM – 5:00 PM PST',
        },
      ],
      disclosure:
        '',
    },

    stopContact: {
      headline: 'Requesting that we stop contacting you',
      body: 'You have the right to request in writing that we cease all further communication. If you make such a request, we may only contact you to: (1) confirm we will stop contacting you, (2) notify you that we may take a specific action, or (3) comply with applicable law. A cease-contact request does not eliminate or resolve the underlying debt.',
      address: [
        'Resort Recovery Solutions, LLC',
        'Attn: Cease Contact',
        'PO Box 23625',
        'San Diego, CA 92193',
      ],
    },

    cfpb: {
      headline: 'Contact your state regulator',
      body: 'If you believe a debt collector has violated your rights, you may file a complaint with the California Department of Financial Protection and Innovation (DFPI) at dfpi.ca.gov or by calling 1-866-275-2677.',
    },

    contact: {
      phone: '(888) 552-4817',
      hours: 'Monday–Friday, 8:00 AM – 5:00 PM PST',
      address: 'Resort Recovery Solutions, LLC\nPO Box 23625\nSan Diego, CA 92193',
    },
  },
}
