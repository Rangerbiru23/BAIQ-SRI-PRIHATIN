'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Users,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(`✅ ${data.message} Booking ID: ${data.bookingId}`)
        setFormData({ name: '', phone: '', service: '', message: '' })
      } else {
        setSubmitMessage(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      setSubmitMessage('❌ Terjadi kesalahan. Silakan coba lagi atau hubungi langsung.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      title: "Potong & Styling Rambut",
      description: "Transformasi penampilan dengan gaya rambut terkini",
      price: "Rp 50.000 - 150.000",
      features: ["Konsultasi gratis", "Produk premium", "Stylist profesional"]
    },
    {
      title: "Treatment Wajah",
      description: "Perawatan wajah untuk kulit sehat dan bercahaya",
      price: "Rp 75.000 - 200.000",
      features: ["Analisis kulit", "Produk herbal", "Pijat relaksasi"]
    },
    {
      title: "Manicure & Pedicure",
      description: "Perawatan tangan dan kaki untuk penampilan sempurna",
      price: "Rp 60.000 - 120.000",
      features: ["Desain nail art", "Perawatan kutikula", "Massage"]
    },
    {
      title: "Makeup & Hijab Styling",
      description: "Makeup profesional dan styling hijab modern",
      price: "Rp 100.000 - 300.000",
      features: ["Makeup artist", "Tutorial hijab", "Photo shoot"]
    }
  ]

  const metaAdsBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Promo Spesial Followers",
      description: "Dapatkan diskon 20% untuk pelanggan setia Instagram dan Facebook"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Beauty Deals",
      description: "Penawaran personal berdasarkan preferensi treatment Anda"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Referral Program",
      description: "Dapatkan reward khusus dengan mengajak teman"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-pink-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                BAIQ SRI PRIHATIN
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors scroll-smooth">Layanan</a>
              <a href="#promo" className="text-gray-700 hover:text-pink-600 transition-colors scroll-smooth">Promo Meta Ads</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors scroll-smooth">Kontak</a>
              <Button 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Booking Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
              ✨ Powered by Meta Ads Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                BAIQ SRI PRIHATIN
              </span>
            </h1>
            <p className="text-2xl text-gray-700 mb-4">Beauty Salon & Hijab Styling</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformasi kecantikan Anda dengan sentuhan profesional dan teknologi Meta Ads untuk pengalaman yang personal dan memukau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg px-8"
                onClick={() => window.open('https://wa.me/6282382466214?text=Halo%20BAIQ%20SRI%20PRIHATIN,%20saya%20ingin%20booking%20layanan%20salon', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Booking via WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8">
                <Star className="w-5 h-5 mr-2" />
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      </section>

      {/* Meta Ads Promotion Section */}
      <section id="promo" className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Meta Ads Exclusive Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Dapatkan keuntungan spesial dengan mengikuti kami di social media
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {metaAdsBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex gap-4 p-4 bg-white rounded-full shadow-lg">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Facebook className="w-5 h-5 mr-2" />
                Follow Facebook
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Instagram className="w-5 h-5 mr-2" />
                Follow Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Layanan <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="text-lg text-gray-700">
              Perawatan kecantikan profesional dengan produk berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-pink-600 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Hubungi <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">BAIQ SRI PRIHATIN</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Siap memberikan layanan kecantikan terbaik untuk Anda. Booking sekarang dan dapatkan penawaran spesial!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600">Jalan Basuki Rahmat, Kel. Praya, Kec. Praya, Kab. Lombok Tengah, Prov. Nusa Tenggara Barat</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">082382466214</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-gray-600">Senin - Sabtu: 09:00 - 20:00</p>
                    <p className="text-gray-600">Minggu: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Masukkan nomor telepon"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Layanan yang Diminati</label>
                  <Input
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    placeholder="Contoh: Potong rambut, Treatment wajah"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pesan (Opsional)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Ceritakan kebutuhan kecantikan Anda..."
                    rows={4}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg py-3 disabled:opacity-50">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim Booking Request'}
                </Button>
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${submitMessage.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-pink-400" />
                <span className="text-xl font-bold">BAIQ SRI PRIHATIN</span>
              </div>
              <p className="text-gray-400 mb-4">
                Beauty Salon & Hijab Styling professional dengan teknologi Meta Ads untuk pengalaman kecantikan yang personal dan memukau.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400">Potong & Styling</a></li>
                <li><a href="#" className="hover:text-pink-400">Treatment Wajah</a></li>
                <li><a href="#" className="hover:text-pink-400">Manicure & Pedicure</a></li>
                <li><a href="#" className="hover:text-pink-400">Makeup & Hijab</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-pink-400">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-pink-400">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 BAIQ SRI PRIHATIN. All rights reserved. | Powered by Meta Ads Technology</p>
          </div>
        </div>
      </footer>
    </div>
  )
}