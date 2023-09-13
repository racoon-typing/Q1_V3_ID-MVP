export const questionsList = [
  // {
  //   id: 1,
  //   title: 'Pilih tipe bentuk tubuh Anda',
  //   answers: [
  //     { id: 0, title: 'Persegi Panjang', point: 0 },
  //     { id: 1, title: 'Apple', point: 0 },
  //     { id: 2, title: 'Jam Pasir', point: 0 },
  //     { id: 3, title: 'Pear', point: 0 },
  //     { id: 4, title: 'Segitiga terbalik', point: 0 },
  //   ],
  // },
  {
    id: 2,
    title: 'Pilih area masalah Anda',
    answers: [
      { id: 0, title: 'Lengan', point: 1 },
      { id: 1, title: 'Perut', point: 3 },
      { id: 2, title: 'Pantat dan paha', point: 2 },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Apa tujuan utama Anda?',
  //   answers: [
  //     { id: 0, title: 'Menurunkan berat badan', point: 3 },
  //     { id: 1, title: 'Mengencangkan tubuh Anda', point: 2 },
  //     { id: 2, title: 'Menambah massa otot', point: 1 },
  //   ],
  // },
  {
    id: 4,
    title: 'Jelaskan hari yang biasa Anda jalani',
    answers: [
      {
        id: 0,
        title:
          'Pekerjaan yang tidak banyak bergerak (kantor, tidak banyak bergerak)',
        point: 4,
      },
      {
        id: 1,
        title: 'Berjalan jauh setiap hari (dengan anak-anak, misalnya)',
        point: 2,
      },
      {
        id: 2,
        title: 'Saya memiliki pekerjaan fisik (pertanian, konstruksi)',
        point: 1,
      },
      { id: 3, title: 'Sebagian besar di rumah', point: 3 },
    ],
  },
  // {
  //   id: 5,
  //   title: 'Rata-rata, berapa lama waktu tidur Anda di malam hari?',
  //   answers: [
  //     { id: 0, title: 'Kurang dari 5 jam', point: 4 },
  //     { id: 1, title: '5-6 jam', point: 2 },
  //     { id: 2, title: '7-8 jam', point: 1 },
  //     { id: 3, title: 'Lebih dari 8 jam', point: 3 },
  //   ],
  // },
  {
    id: 6,
    title: 'Seberapa bersemangatkah Anda sepanjang hari?',
    answers: [
      {
        id: 0,
        title: 'Saya merasa waspada dan berenergi sepanjang hari',
        point: 1,
      },
      { id: 1, title: 'Tingkat energi saya menurun sepanjang hari', point: 2 },
      { id: 2, title: 'Saya merasa lelah dan malas sepanjang waktu', point: 3 },
    ],
  },
  {
    id: 7,
    title: 'Aktivitas fisik Anda:',
    answers: [
      { id: 0, title: 'Hampir nol', point: 4 },
      { id: 1, title: 'Hanya berjalan kaki', point: 3 },
      { id: 2, title: 'Berolahraga 1-2 kali seminggu', point: 2 },
      { id: 3, title: 'Berlatih 3-5 kali seminggu', point: 1 },
    ],
  },
  {
    id: 8,
    title:
      'Apakah Anda pernah mencoba diet? Apakah Anda mendapatkan hasil yang Anda harapkan?',
    answers: [
      { id: 0, title: 'Tidak, dan saya tidak ingin mencobanya', point: 2 },
      { id: 1, title: 'Tidak, tapi saya ingin mencobanya', point: 3 },
      { id: 2, title: 'Ya, tapi tidak berhasil', point: 4 },
      { id: 3, title: 'Ya, tapi berat badan saya kembali naik', point: 5 },
      {
        id: 4,
        title:
          'Ya, saya berhasil menurunkan berat badan, tetapi tidak kembali lagi.',
        point: 1,
      },
    ],
  },
  {
    id: 9,
    title: 'Apakah ada kerabat Anda yang kelebihan berat badan?',
    answers: [
      { id: 0, title: 'Iya', point: 3 },
      { id: 1, title: 'Tidak', point: 1 },
      { id: 2, title: 'Tidak tahu', point: 2 },
    ],
    fact: '52% pengguna memilih opsi "Ya, tetapi berat badan kembali". Ini menunjukkan bahwa di dunia modern, diet telah kehilangan daya tariknya karena berat badan sering kali kembali naik setelahnya',
  },
  {
    id: 10,
    title: 'Berapa banyak air yang Anda minum setiap hari?',
    answers: [
      {
        id: 0,
        title: 'Hanya teh, kopi, soda, dll.',
        point: 5,
      },
      {
        id: 1,
        title: 'Kurang dari 2 gelas (0,5 liter)',
        point: 4,
      },
      {
        id: 2,
        title: '2-6 gelas (1 liter - 1,5 liter)',
        point: 1,
      },
      {
        id: 3,
        title: 'Lebih dari 6 gelas',
        point: 2,
      },
      {
        id: 4,
        title: 'Tidak tahu',
        point: 3,
      },
    ],
  },
  {
    id: 11,
    title:
      'Berapa lama waktu yang Anda miliki dalam sehari untuk menyiapkan makanan?',
    answers: [
      {
        id: 0,
        title: 'Kurang dari 30 menit',
        point: 3,
      },
      {
        id: 1,
        title: '30-60 menit',
        point: 2,
      },
      {
        id: 2,
        title: 'Lebih dari satu jam',
        point: 1,
      },
    ],
    fact: 'Fakta: Kebutuhan untuk minum 2 liter air sehari adalah mitos yang menguntungkan bagi penjual minuman. Sebagian cairan yang kita butuhkan diperoleh dari makanan. Perhitungannya: 20-40 ml air untuk setiap kilogram berat badan. Misalnya, dengan berat 70 kg, disarankan untuk minum 1700-2000 ml air per hari.',
  },
  // {
  //   id: 12,
  //   title:
  //     'Terbukti bahwa menurunkan berat badan dengan hanya mengandalkan olahraga dan diet tidak terlalu efektif. Bagaimana pendapat Anda tentang berbagai suplemen yang membantu mendapatkan bentuk tubuh idaman?',
  //   answers: [
  //     { id: 0, title: 'Tidak pernah mencobanya', point: 2 },
  //     {
  //       id: 1,
  //       title:
  //         'Mencoba beberapa, tidak membantu (atau berat badan kembali naik)',
  //       point: 1,
  //     },
  //     { id: 2, title: 'Mencoba beberapa, itu membantu', point: 3 },
  //   ],
  // },
  {
    id: 13,
    title:
      'Selain menurunkan berat badan dan mengencangkan otot, apa masalah terpenting yang ingin Anda selesaikan?',
    answers: [
      { id: 0, title: 'Saya ingin tidur yang berkualitas', point: 3 },
      {
        id: 1,
        title: 'Mengurangi mengidam makanan',
        point: 5,
      },
      { id: 2, title: 'Memiliki lebih banyak energi', point: 4 },
      { id: 2, title: 'Memperbaiki suasana hati saya', point: 2 },
      { id: 2, title: 'Mengatasi masalah penyakit', point: 1 },
    ],
  },
];
