export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">CiteSafe</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79b8ff] transition-colors">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#21262d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For students, by educators
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Avoid accidental plagiarism<br />
          <span className="text-[#58a6ff]">before it costs you.</span>
        </h1>
        <p className="text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your draft and get instant, educational feedback on potential plagiarism — with step-by-step citation coaching, not punitive scores.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#79b8ff] transition-colors">Start for $9/mo</a>
          <a href="#faq" className="border border-[#30363d] px-8 py-3 rounded-md font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">Learn more</a>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📄', title: 'Upload your draft', desc: 'Paste text or upload a .docx/.pdf file before submitting.' },
            { icon: '🔍', title: 'Instant similarity check', desc: 'Text similarity algorithms flag passages that need attention.' },
            { icon: '📚', title: 'Learn to cite correctly', desc: 'Interactive coaching shows you exactly how to fix each issue.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, honest pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Student Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited document checks',
              'Real-time similarity detection',
              'Interactive citation coaching',
              'APA, MLA, Chicago support',
              'History of past submissions',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] py-3 rounded-md font-semibold hover:bg-[#79b8ff] transition-colors text-center">Get CiteSafe — $9/mo</a>
          <p className="text-[#8b949e] text-xs mt-4">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Is this the same as Turnitin?',
              a: 'No. CiteSafe is designed to teach, not punish. Instead of a score that gets sent to your professor, you get private, actionable coaching so you can fix issues before you submit.',
            },
            {
              q: 'What file types are supported?',
              a: 'You can paste text directly, or upload .docx and .pdf files. We extract the text and run similarity analysis on the full document.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, anytime. Log into your Lemon Squeezy customer portal and cancel with one click. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} CiteSafe. Built for students who care about academic integrity.</p>
      </footer>
    </main>
  )
}
