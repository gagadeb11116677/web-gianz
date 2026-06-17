'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Bot, Send, Radio, Users, Zap, Shield, Clock,
  MessageSquare, UserPlus, LogOut, Timer, Pause,
  Terminal,
  Layers, Smartphone, Settings, Crown, Eye,
  Activity, Check, Star, Sparkles,
  Headphones, Rocket, Lock,
  MessageCircle, ArrowDown,
} from 'lucide-react'

const IMG = 'https://files.catbox.moe/lx30um.jpg'

/* ─── anim helper ─── */
const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } })
}
function In({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const r = useRef(null)
  const v = useInView(r, { once: true, margin: '-50px' })
  return <motion.div ref={r} initial="hidden" animate={v ? 'visible' : 'hidden'} variants={fade} custom={delay} className={className}>{children}</motion.div>
}

/* ─── data ─── */
const stats = [
  { label: 'Version', value: '3.5', icon: Settings },
  { label: 'Platform', value: 'WhatsApp', icon: Smartphone },
  { label: 'Library', value: 'Baileys', icon: Terminal },
  { label: 'Support', value: '24/7', icon: Headphones },
]

const features = [
  { icon: Send, title: 'JPM Broadcast', desc: 'Kirim pesan massal ke semua grup sekaligus, support foto & video.' },
  { icon: Radio, title: 'SWGC Media', desc: 'Broadcast ke semua grup dengan gambar dan video.' },
  { icon: UserPlus, title: 'Auto Join', desc: 'Join otomatis ke grup — satu link atau sekaligus semua.' },
  { icon: Layers, title: 'Multi Bot', desc: 'Jalankan banyak bot dalam 1 instance, session terpisah.' },
  { icon: Timer, title: 'Auto Broadcast', desc: 'JPM & SWGC berulang otomatis, delay bisa diatur.' },
  { icon: Smartphone, title: 'Pairing Code', desc: 'Koneksi via kode pairing, gak perlu scan QR.' },
  { icon: Users, title: 'Push Kontak', desc: 'Kirim kontak ke semua member grup secara massal.' },
  { icon: Shield, title: 'Auto Reconnect', desc: 'Reconnect otomatis saat putus, tanpa downtime.' },
]

const cmds = [
  { t: 'General', icon: MessageSquare, c: 'text-emerald-400', items: ['.menu', '.ping'] },
  { t: 'Bot', icon: Bot, c: 'text-green-400', items: ['.addbot', '.delbot', '.listbot'] },
  { t: 'Owner', icon: Crown, c: 'text-yellow-400', items: ['.addowner', '.delowner', '.listowner'] },
  { t: 'Group', icon: Users, c: 'text-cyan-400', items: ['.join', '.joinall', '.gasjoin', '.cekjoin', '.listgc'] },
  { t: 'Broadcast', icon: Send, c: 'text-emerald-300', items: ['.jpm', '.jpmtag', '.swgc'] },
  { t: 'Auto', icon: Activity, c: 'text-lime-400', items: ['.autojpm', '.autojpmtag', '.autoswgc'] },
  { t: 'Stop', icon: Pause, c: 'text-red-400', items: ['.stopautojpm', '.stopautojpmtag', '.stopautoswgc', '.stopjoinall', '.stopjpm'] },
  { t: 'Group Out', icon: LogOut, c: 'text-orange-400', items: ['.outallgroup', '.outclosegroup'] },
  { t: 'Kontak', icon: UserPlus, c: 'text-pink-400', items: ['.pushkontak'] },
  { t: 'Delay', icon: Clock, c: 'text-violet-400', items: ['.setdelayjpm', '.setdelayswgc', '.setdelayjoin'] },
]

const included = [
  'Full source code tanpa encrypt',
  'JPM + SWGC + media support',
  'Multi bot support',
  'Auto reconnect & auto join',
  'Push kontak massal',
  'Pairing code system',
  'Customizable delay',
  'Owner & bot management',
  'Update gratis selamanya',
  'Support 24/7 via Telegram',
  'Full tutorial cara pasang',
  'Bantuan sampai bot jalan',
]

const reasons = [
  { icon: Rocket, title: 'Code Premium', desc: 'Bersih, terstruktur, well-documented. Bukan copas.' },
  { icon: Headphones, title: 'Support 24/7', desc: 'Bingung setup? Langsung dibantu sampai jalan.' },
  { icon: Lock, title: 'No Encrypt', desc: '100% source terbuka, bebas modifikasi.' },
  { icon: Zap, title: 'Mudah Setup', desc: 'Tutorial lengkap dari nol sampai bot online.' },
]

/* ─── page ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      {/* ── Ambient bg ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[600px] h-[300px] bg-emerald-500/[0.02] rounded-full blur-[150px] -translate-x-1/2" />
      </div>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500/25 to-green-500/15 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="font-bold text-sm tracking-tight">GianzJPM</span>
            <span className="text-[9px] text-emerald-400/60 font-mono">v3.5</span>
          </div>
          <a href="https://t.me/GianzOfficial" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-[#2AABEE] hover:bg-[#229ED9] text-white text-[11px] gap-1.5 h-7 px-3 shadow-lg shadow-[#2AABEE]/15">
              <MessageCircle className="w-3 h-3" /> Chat Owner
            </Button>
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative py-14 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex flex-col items-center text-center gap-5">

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-muted-foreground">Premium WhatsApp Bot</span>
                <Sparkles className="w-3 h-3 text-emerald-400/60" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.5 }}>
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">GianzJPM</span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12, duration: 0.45 }}>
              Bot WhatsApp multi-fungsi — JPM, SWGC Media, Auto Join, Push Kontak, Multi-Bot. Source code premium, code bersih, support penuh.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-2.5"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.35 }}>
              <a href="https://t.me/GianzOfficial" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white gap-2 shadow-xl shadow-emerald-600/20 px-6">
                  <Star className="w-4 h-4" /> Mau SC-nya? Chat Aja
                </Button>
              </a>
              <Button variant="ghost" className="text-muted-foreground gap-2 hover:text-foreground" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                <Eye className="w-4 h-4" /> Lihat Fitur
                <ArrowDown className="w-3 h-3" />
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div className="mt-8 w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]"
              initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/15 via-green-400/8 to-emerald-600/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
                  <img src={IMG} alt="GianzJPM Bot" className="w-full h-auto object-contain bg-black/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <In key={s.label} delay={i + 1}>
                <div className="flex flex-col items-center gap-1.5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <s.icon className="w-4 h-4 text-emerald-400/70" />
                  <span className="text-xs font-semibold">{s.value}</span>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest">{s.label}</span>
                </div>
              </In>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-12">
        <div className="max-w-4xl mx-auto px-5">
          <In delay={0} className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Fitur</h2>
            <p className="text-muted-foreground text-xs mt-1.5">Semua yang kamu butuhkan</p>
          </In>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {features.map((f, i) => (
              <In key={f.title} delay={i + 1}>
                <div className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-300 h-full">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-2.5 group-hover:bg-emerald-500/15 group-hover:scale-110 transition-all duration-300">
                    <f.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-[13px] font-semibold mb-1">{f.title}</h3>
                  <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{f.desc}</p>
                </div>
              </In>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMANDS ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-5">
          <In delay={0} className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Commands</h2>
            <p className="text-muted-foreground text-xs mt-1.5">{cmds.reduce((a, c) => a + c.items.length, 0)} command tersedia</p>
          </In>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {cmds.map((g, i) => (
              <In key={g.t} delay={i + 1}>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] h-full">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <g.icon className={`w-3 h-3 ${g.c}`} />
                    <span className="text-[11px] font-semibold">{g.t}</span>
                  </div>
                  <div className="space-y-1">
                    {g.items.map((cmd) => (
                      <code key={cmd} className="block text-[10px] font-mono text-emerald-300/60 bg-emerald-500/[0.04] px-2 py-0.5 rounded-md border border-white/[0.03]">
                        {cmd}
                      </code>
                    ))}
                  </div>
                </div>
              </In>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM / PRICING ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5">
          <In delay={0} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/[0.06] border border-yellow-500/[0.1] mb-3">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-[11px] text-yellow-400/80 font-medium">Premium</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Mau SC Segini?</h2>
            <p className="text-muted-foreground text-xs mt-2">Harga? Chat aja — ga mahal kok</p>
          </In>

          <div className="max-w-2xl mx-auto">
            <In delay={1}>
              <div className="relative rounded-3xl overflow-hidden">
                {/* bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] via-card to-green-500/[0.05]" />
                <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/[0.06] rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400/[0.04] rounded-full blur-[60px]" />

                <div className="relative p-6 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">

                    {/* Left - Pricing */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <h3 className="font-bold text-lg">Premium Package</h3>
                      </div>
                      <p className="text-muted-foreground text-xs mb-6">Full source code GianzJPM + support premium</p>

                      <div className="mb-6">
                        <span className="text-muted-foreground text-xs">Harga?</span>
                        <p className="text-xl font-bold text-emerald-400 mt-0.5">Chat @GianzOfficial</p>
                        <p className="text-[11px] text-muted-foreground/60 mt-0.5">Negotiable — pasti terjangkau</p>
                      </div>

                      <a href="https://t.me/GianzOfficial" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-[#2AABEE] to-[#229ED9] hover:from-[#229ED9] hover:to-[#1da1d0] text-white gap-2 shadow-xl shadow-[#2AABEE]/20">
                          <MessageCircle className="w-4 h-4" /> Chat di Telegram
                        </Button>
                      </a>
                    </div>

                    {/* Right - Included */}
                    <div className="flex-1">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Yang kamu dapat:</p>
                      <div className="space-y-2">
                        {included.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </In>
          </div>
        </div>
      </section>

      {/* ── WHY GIANZJPM ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-5">
          <In delay={0} className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Kenapa GianzJPM?</h2>
          </In>
          <div className="grid grid-cols-2 gap-2.5 max-w-2xl mx-auto">
            {reasons.map((r, i) => (
              <In key={r.title} delay={i + 1}>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] h-full">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-2">
                    <r.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-[13px] font-semibold mb-1">{r.title}</h3>
                  <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{r.desc}</p>
                </div>
              </In>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5">
          <In delay={0}>
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-5 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.04] to-transparent pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="relative">
                  <h2 className="text-xl sm:text-2xl font-bold">Ready to Buy?</h2>
                  <p className="text-muted-foreground text-xs mt-2 max-w-sm mx-auto">
                    Chat <span className="text-[#2AABEE] font-semibold">@GianzOfficial</span> di Telegram untuk harga dan pemesanan.
                    Ga mahal, pasti worth it! 🤝
                  </p>
                </div>

                <a href="https://t.me/GianzOfficial" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white gap-2 shadow-xl shadow-emerald-600/20 px-8">
                    <MessageCircle className="w-4 h-4" /> Chat @GianzOfficial
                  </Button>
                </a>
              </div>
            </div>
          </In>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mt-auto border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 py-6 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <Bot className="w-3.5 h-3.5 text-emerald-400/70" />
            <span className="font-bold text-sm">GianzJPM</span>
            <span className="text-[9px] text-emerald-400/40 font-mono">v3.5</span>
          </div>
          <p className="text-[11px] text-muted-foreground/60">
            by <span className="text-emerald-400/80 font-medium">GianzOfficial</span> &middot; Premium WhatsApp Bot
          </p>
          <p className="text-[10px] text-muted-foreground/30">&copy; 2025 GianzJPM</p>
        </div>
      </footer>
    </div>
  )
}
