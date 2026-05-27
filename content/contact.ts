export const contactContent = {
  hero: {
    eyebrow: 'Contact',
    headline: 'Let\'s talk about\nyour portfolio.',
    subhead:
      'All inquiries are handled confidentially. We typically respond within 24 to 48 hours.',
  },

  form: {
    headline: 'Request a proposal',
    subhead: 'Tell us about your delinquency challenge and we\'ll schedule a portfolio review call.',
    fields: {
      company: 'Company name',
      name: 'Your name',
      title: 'Title',
      email: 'Business email',
      phone: 'Phone number',
      portfolioType: 'Portfolio type',
      portfolioTypeOptions: [
        'Resort Developer - Loans or Maintenance Fee Delinquencies',
        'HOA — assessment recovery',
        'Exchange network — member receivables',
        'Other',
      ],
      message: 'Tell us about your delinquency challenge (optional)',
      submit: 'Submit inquiry',
    },
    successMessage: 'Thank you. A member of our team will be in touch within 24 to 48 hours.',
  },

  info: {
    address: {
      label: 'Mailing address',
      lines: ['Resort Recovery Solutions, LLC', '8755 Aero Drive, Suite 304', 'San Diego, CA 92123'],
    },
    phone: {
      label: 'Main line',
      value: '(888) 552-4817',
      note: 'Business inquiries only. Consumer account inquiries: see Consumer Payment Portal.',
    },
    email: {
      label: 'General inquiries',
      value: 'info@resortrecovery.com',
    },
    compliance: {
      label: 'Compliance inquiries',
      value: 'info@resortrecovery.com',
    },
    hours: 'Monday–Friday, 8:00 AM – 5:00 PM PST',
  },
}
