const LABELS = {
  sr: {
    tag: 'Primer popunjene uplatnice',
    recipient: 'Primalac',
    purpose: 'Svrha uplate',
    account: 'Račun primaoca',
    bank: 'Banka',
    amount: 'Iznos',
    amountNote: '(dinarska protivvrednost po srednjem kursu NBS)',
    reference: 'Poziv na broj',
  },
  en: {
    tag: 'Example of a filled-in payment slip',
    recipient: 'Recipient',
    purpose: 'Purpose of payment',
    account: "Recipient's account",
    bank: 'Bank',
    amount: 'Amount',
    amountNote: '(RSD equivalent at the NBS mid exchange rate)',
    reference: 'Reference number',
  },
};

export default function PaymentSlip({ locale, t }) {
  const l = LABELS[locale] || LABELS.sr;

  return (
    <div className="payslip">
      <span className="payslip-tag">{l.tag}</span>
      <div className="payslip-body">
        <div className="payslip-row">
          <span className="payslip-label">{l.recipient}</span>
          <span className="payslip-value">{t.paymentRecipient}</span>
        </div>
        <div className="payslip-row">
          <span className="payslip-label">{l.purpose}</span>
          <span className="payslip-value">{t.paymentPurpose}</span>
        </div>
        <div className="payslip-row">
          <span className="payslip-label">{l.account}</span>
          <span className="payslip-value payslip-value--account">{t.paymentAccountNumber}</span>
        </div>
        <div className="payslip-row">
          <span className="payslip-label">{l.bank}</span>
          <span className="payslip-value">{t.paymentBank}</span>
        </div>
        <div className="payslip-row">
          <span className="payslip-label">{l.amount}</span>
          <span className="payslip-value payslip-value--amount">
            250 / 290 EUR
            <small>{l.amountNote}</small>
          </span>
        </div>
        <div className="payslip-row">
          <span className="payslip-label">{l.reference}</span>
          <span className="payslip-value">{t.paymentReference}</span>
        </div>
      </div>
    </div>
  );
}
