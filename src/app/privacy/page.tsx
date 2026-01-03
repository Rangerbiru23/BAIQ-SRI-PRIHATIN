'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-pink-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                BAIQ SRI PRIHATIN
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Kebijakan Privasi untuk **BAIQ SRI PRIHATIN** Beauty Salon & Hijab Styling
          </p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Pendahuluan</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Selamat datang di BAIQ SRI PRIHATIN Beauty Salon & Hijab Styling. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan layanan salon kami, 
              website, dan platform digital kami termasuk integrasi dengan Meta Ads.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Pengumpulan Data</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Informasi yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Data Pribadi:</strong> Nama lengkap, nomor telepon, alamat email</li>
                  <li><strong>Data Booking:</strong> Jenis layanan, jadwal appointment, preferensi treatment</li>
                  <li><strong>Data Kontak:</strong> Alamat, informasi lokasi untuk layanan home service</li>
                  <li><strong>Data Pembayaran:</strong> Informasi transaksi dan metode pembayaran</li>
                  <li><strong>Data Digital:</strong> Interaksi dengan website, Meta Ads, dan media sosial kami</li>
                  <li><strong>Data Preferensi:</strong> Riwayat treatment, feedback, dan preferensi kecantikan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <UserCheck className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Penggunaan Data</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">Kami menggunakan data pribadi Anda untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memproses booking dan menjadwalkan appointment</li>
                <li>Memberikan layanan salon yang personalized sesuai preferensi Anda</li>
                <li>Mengirimkan konfirmasi appointment dan reminder</li>
                <li>Memproses pembayaran dan mengelola transaksi</li>
                <li>Memberikan penawaran spesial melalui Meta Ads dan promosi lainnya</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pelanggan</li>
                <li>Menghubungi Anda untuk follow-up treatment dan feedback</li>
                <li>Analisis bisnis dan pengembangan layanan baru</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Keamanan Data</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">Kami melindungi data Anda dengan:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Enkripsi Data:</strong> Semua data pribadi dienkripsi dengan standar keamanan tinggi</li>
                <li><strong>Akses Terbatas:</strong> Hanya staf berwenang yang dapat mengakses data pelanggan</li>
                <li><strong>Secure Servers:</strong> Data disimpan di server yang aman dan terpercaya</li>
                <li><strong>Regular Updates:</strong> Sistem keamanan kami selalu diperbarui secara berkala</li>
                <li><strong>Compliance:</strong> Mematuhi regulasi perlindungan data yang berlaku di Indonesia</li>
              </ul>
            </div>
          </section>

          {/* Meta Ads Integration */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-pink-200">
            <h2 className="text-2xl font-bold mb-4">Integrasi Meta Ads</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Sebagai bagian dari layanan digital kami, kami menggunakan Meta Ads (Facebook & Instagram) untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menampilkan iklan yang relevan dengan preferensi kecantikan Anda</li>
                <li>Memberikan penawaran khusus dan promo eksklusif</li>
                <li>Mengirimkan reminder appointment melalui Messenger</li>
                <li>Menyediakan layanan customer service via social media</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Data yang digunakan untuk Meta Ads tetap mematuhi kebijakan privasi Meta dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Hak Anda sebagai Pelanggan</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Sebagai pelanggan BAIQ SRI PRIHATIN, Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Akses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Koreksi Data:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
                <li><strong>Hapus Data:</strong> Meminta penghapusan data pribadi Anda</li>
                <li><strong>Opt-out:</strong> Menolak pemasaran dan komunikasi promosi</li>
                <li><strong>Kelola Preferensi:</strong> Mengatur preferensi komunikasi dan iklan</li>
                <li><strong>Keluhan:</strong> Mengajukan keluhan tentang penanganan data Anda</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan hak Anda, 
              silakan hubungi kami melalui:
            </p>
            <div className="space-y-2">
              <p><strong>Telepon:</strong> 082382466214</p>
              <p><strong>Alamat:</strong> Jalan Basuki Rahmat, Kel. Praya, Kec. Praya, Kab. Lombok Tengah, Prov. Nusa Tenggara Barat</p>
              <p><strong>Email:</strong> [Email akan ditambahkan]</p>
            </div>
            <p className="mt-4 text-sm">
              Kami akan merespons permintaan Anda dalam waktu 7 hari kerja.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pembaruan Kebijakan</h2>
            <p className="text-gray-700">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
              dalam praktik bisnis kami atau perubahan regulasi. Setiap perubahan akan diberitahukan 
              melalui website, media sosial, atau langsung kepada pelanggan.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 BAIQ SRI PRIHATIN. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2">Beauty Salon & Hijab Styling | Powered by Meta Ads Technology</p>
          </div>
        </div>
      </footer>
    </div>
  )
}