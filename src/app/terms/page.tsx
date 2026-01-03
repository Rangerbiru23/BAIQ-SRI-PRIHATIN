'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Clock, Users } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-pink-600" />
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
              Terms and Conditions
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Syarat dan Ketentuan Layanan **BAIQ SRI PRIHATIN** Beauty Salon & Hijab Styling
          </p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Penerimaan Syarat dan Ketentuan</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggunakan layanan BAIQ SRI PRIHATIN Beauty Salon & Hijab Styling, Anda setuju untuk terikat 
              oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
              jangan gunakan layanan kami.
            </p>
          </section>

          {/* Services Description */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Layanan Kami</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">BAIQ SRI PRIHATIN menyediakan layanan:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Potong & Styling Rambut:</strong> Layanan pemotongan dan penataan rambut profesional</li>
                <li><strong>Treatment Wajah:</strong> Perawatan wajah dengan produk berkualitas</li>
                <li><strong>Manicure & Pedicure:</strong> Perawatan tangan dan kaki lengkap</li>
                <li><strong>Makeup & Hijab Styling:</strong> Layanan makeup profesional dan styling hijab modern</li>
                <li><strong>Konsultasi Kecantikan:</strong> Konsultasi personal untuk perawatan kecantikan</li>
                <li><strong>Layanan Home Service:</strong> Layanan panggilan untuk treatment tertentu</li>
              </ul>
            </div>
          </section>

          {/* Booking and Appointment */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Booking dan Janji Temu</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Ketentuan Booking:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Booking dapat dilakukan melalui telepon, WhatsApp, atau formulir online</li>
                  <li>Deposit sebesar 50% diperlukan untuk treatment premium</li>
                  <li>Pembatalan dapat dilakukan maksimal 24 jam sebelum jadwal</li>
                  <li>Pembatalan kurang dari 24 jam akan dikenakan biaya 50% dari total layanan</li>
                  <li>Tidak hadir tanpa pemberitahuan akan dikenakan biaya penuh</li>
                  <li>Perubahan jadwal dapat dilakukan sesuai ketersediaan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Syarat Pembayaran</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Metode Pembayaran:</strong> Tunai, Transfer Bank, E-Wallet (OVO, GoPay, Dana)</li>
                <li><strong>Pembayaran Deposit:</strong> Wajib dilakukan sebelum treatment dimulai</li>
                <li><strong>Pelunasan:</strong> Dilakukan setelah layanan selesai</li>
                <li><strong>Harga:</strong> Harga yang tercantum adalah harga final dan tidak dapat dinegosiasi</li>
                <li><strong>Promo:</strong> Promo dan diskon tidak dapat digabungkan kecuali disebutkan secara khusus</li>
                <li><strong>Kembalian:</strong> Kembalian dalam bentuk tunai atau E-Wallet sesuai metode pembayaran</li>
              </ul>
            </div>
          </section>

          {/* Customer Responsibilities */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Tanggung Jawab Pelanggan</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Sebagai pelanggan, Anda bertanggung jawab untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi kesehatan yang relevan (alergi, kondisi kulit, dll)</li>
                <li>Tiba tepat waktu sesuai jadwal booking</li>
                <li>Memberi tahu jika memiliki kondisi khusus yang mempengaruhi treatment</li>
                <li>Memperlakukan staf dan fasilitas dengan sopan</li>
                <li>Mematuhi peraturan yang berlaku di salon</li>
                <li>Memberikan feedback konstruktif untuk peningkatan layanan</li>
              </ul>
            </div>
          </section>

          {/* Salon Responsibilities */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-pink-200">
            <h2 className="text-2xl font-bold mb-4">Tanggung Jawab Salon</h2>
            <div className="space-y-4">
              <p className="text-gray-700">BAIQ SRI PRIHATIN berkomitmen untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan layanan profesional dengan staf berpengalaman</li>
                <li>Menggunakan produk berkualitas dan aman</li>
                <li>Menjaga kebersihan dan sterilisasi peralatan</li>
                <li>Memberikan konsultasi sebelum treatment</li>
                <li>Menghormati privasi dan kerahasiaan pelanggan</li>
                <li>Memberikan layanan sesuai dengan standar kecantikan profesional</li>
              </ul>
            </div>
          </section>

          {/* Meta Ads Terms */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ketentuan Meta Ads dan Digital</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Untuk layanan digital dan Meta Ads:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Promo Online:</strong> Promo yang berlaku melalui Meta Ads wajib ditunjukkan saat booking</li>
                <li><strong>Booking Digital:</strong> Konfirmasi booking akan dikirim melalui WhatsApp atau Messenger</li>
                <li><strong>Review dan Testimoni:</strong> Review jujur sangat dihargai untuk peningkatan layanan</li>
                <li><strong>Content Usage:</strong> Foto before/after dapat digunakan untuk promosi dengan persetujuan</li>
                <li><strong>Communication:</strong> Komunikasi digital akan dilakukan jam operasional</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold">Batasan Tanggung Jawab</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">BAIQ SRI PRIHATIN tidak bertanggung jawab atas:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Reaksi alergi yang tidak diinformasikan sebelumnya</li>
                <li>Kerusakan pribadi benda yang dibawa pelanggan</li>
                <li>Hasil treatment yang tidak sesuai ekspektasi pribadi</li>
                <li>Keterlambatan karena faktor eksternal (cuaca, traffic, dll)</li>
                <li>Kehilangan barang pribadi di area salon</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Kami selalu berusaha memberikan layanan terbaik, namun hasil dapat bervariasi 
                tergantung kondisi individu dan jenis treatment.
              </p>
            </div>
          </section>

          {/* Refund and Cancellation */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Kebijakan Pengembalian Dana</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Full Refund:</strong> Jika pembatalan dilakukan 48+ jam sebelum jadwal</li>
                <li><strong>50% Refund:</strong> Jika pembatalan dilakukan 24-48 jam sebelum jadwal</li>
                <li><strong>No Refund:</strong> Jika pembatalan kurang dari 24 jam atau tidak hadir</li>
                <li><strong>Force Majeure:</strong> Pengembalian penuh jika pembatalan karena alasan darurat medis</li>
                <li><strong>Processing Time:</strong> Refund akan diproses dalam 3-5 hari kerja</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Hak Kekayaan Intelektual</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Semua konten, desain, dan materi di website BAIQ SRI PRIHATIN dilindungi oleh 
                hak cekayaan intelektual. Tidak diperbolehkan menyalin, mendistribusikan, atau 
                menggunakan materi tanpa izin tertulis.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Penyelesaian Sengketa</h2>
            <div className="space-y-4">
              <p>
                Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan secara 
                musyawarah terlebih dahulu. Jika tidak mencapai kesepakatan, sengketa akan 
                diselesaikan melalui peradilan di wilayah Kabupaten Lombok Tengah.
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Alamat:</strong> Jalan Basuki Rahmat, Kel. Praya, Kec. Praya, Kab. Lombok Tengah, Prov. Nusa Tenggara Barat</p>
                <p><strong>Telepon:</strong> 082382466214</p>
                <p><strong>Email:</strong> [Email akan ditambahkan]</p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Perubahan Syarat dan Ketentuan</h2>
            <p className="text-gray-700">
              Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
              diberitahukan melalui website, media sosial, atau langsung kepada pelanggan. 
              Penggunaan layanan setelah perubahan berarti Anda menerima syarat yang baru.
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