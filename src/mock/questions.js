const questionsList = [
    {
      id: 1,
      title: "Apa tujuan Anda?",
      answers: [
        { id: 0, title: "Saya ingin tetap bugar", point: 1 },
        { id: 1, title: "Saya ingin menurunkan berat badan", point: 2 },
      ],
    },
    {
      id: 2,
      title: "Bagaimana Anda menggambarkan gaya hidup Anda?",
      answers: [
        { id: 0, title: "Tak banyak bergerak, pekerjaan di tempat", point: 3 },
        { id: 1, title: "Aktif, kaki banyak bekerja", point: 1 },
        { id: 2, title: "Di antara keduanya", point: 2 },
      ],
    },
    {
      id: 3,
      title: "Seberapa sering Anda berolahraga?",
      answers: [
        { id: 0, title: "Berolahraga setiap hari", point: 1 },
        { id: 1, title: "Berolahraga 3 kali seminggu", point: 2 },
        { id: 2, title: "Jalan kaki setiap hari selama 20-30 menit", point: 3 },
        { id: 3, title: "Tidak ada aktivitas fisik secara teratur", point: 4 },
      ],
    },
    {
      id: 4,
      title:
        "Apakah Anda pernah mencoba diet? Apakah Anda mendapat hasil yang diharapkan?",
      answers: [
        {
          id: 0,
          title:
            "Ya, saya berhasil menurunkan berat badan, berat badan tidak kembali",
          point: 1,
        },
        { id: 1, title: "Ya, tapi bobotnya naik kembali", point: 2 },
        { id: 2, title: "Ya, tapi tidak bisa menurunkan berat badan", point: 3 },
        { id: 3, title: "Tidak, tapi saya ingin mencoba", point: 4 },
        { id: 4, title: "Tidak, saya tidak ingin mencoba", point: 5 },
      ],
    },
    {
      id: 5,
      title: "Apakah ada kerabat Anda yang kelebihan berat badan?",
      answers: [
        { id: 0, title: "Ya", point: 3 },
        { id: 1, title: "Tidak", point: 1 },
        { id: 2, title: "Tidak tahu", point: 2 },
      ],
    },
    {
      id: 6,
      title: "Berapa banyak air yang Anda minum tiap hari?",
      answers: [
        {
          id: 0,
          title: "Saya jarang minum, hanya teh, kopi, soda, dll",
          point: 4,
        },
        { id: 1, title: "1-2 liter", point: 1 },
        { id: 2, title: "Sekitar 0,5 l - 1 l", point: 3 },
        { id: 3, title: "Tidak tahu", point: 2 },
      ],
    },
    {
      id: 7,
      title: "Berapa banyak waktu yang ingin Anda gunakan untuk memasak?",
      answers: [
        { id: 0, title: "Tidak lebih dari satu jam sehari", point: 3 },
        { id: 1, title: "Sekitar 2 jam", point: 2 },
        { id: 2, title: "Lebih dari 2 jam, saya suka memasak", point: 1 },
      ],
    },
    {
      id: 8,
      title: "Bagaimana Anda menilai berat badan Anda selama setahun terakhir?",
      answers: [
        { id: 0, title: "Naik 3 kg atau lebih", point: 3 },
        { id: 1, title: "Berat badan tidak berubah", point: 2 },
        { id: 2, title: "Turun 3 kg atau lebih", point: 1 },
      ],
    },
    {
      id: 9,
      title: "Seberapa sering Anda makan berlebihan?",
      answers: [
        { id: 0, title: "Setiap hari", point: 4 },
        { id: 1, title: "2-4 kali seminggu", point: 3 },
        { id: 2, title: "Jarang", point: 2 },
        { id: 3, title: "Tidak tahu", point: 1 },
      ],
    },
    {
      id: 10,
      title:
        "Telah terbukti bahwa menurunkan berat badan, hanya mengandalkan kemungkinan olahraga dan diet, tidak sepenuhnya efektif. Bagaimana perasaan Anda tentang berbagai suplemen yang membantu Anda mendapatkan bentuk tubuh impian Anda?",
      answers: [
        { id: 0, title: "Tidak pernah mencoba", point: 3, isUsed: "false" },
        {
          id: 1,
          title: "Mencoba (a) beberapa, tidak membantu (atau bobot naik kembali)",
          point: 2,
          isUsed: "true",
        },
        {
          id: 2,
          title: "Pernah mencoba, berhasil membantu",
          point: 1,
          isUsed: "true",
        },
      ],
    },
    {
      id: 11,
      title:
        "Bayangkan Anda sudah turun berat badan. Apa yang akan Anda lakukan pertama kali?",
      answers: [
        {
          id: 0,
          title:
            "Saya akan mengenakan pakaian favorit yang menjadi tujuan menurunkan berat badan saya",
          point: 0,
        },
        {
          id: 1,
          title:
            "Saya akan memposting foto baru di media sosial. Saya akan melakukan pemotretan",
          point: 0,
        },
        {
          id: 2,
          title: "Memamerkan tubuh cantik Anda kepada pasangan",
          point: 0,
        },
        { id: 3, title: "Berolahraga dan mulai gaya hidup sehat", point: 0 },
        {
          id: 4,
          title:
            "Saya akan lebih sering keluar dan berkomunikasi dengan orang-orang",
          point: 0,
        },
        {
          id: 5,
          title:
            "Saya akan melakukan hobi yang tidak bisa saya lakukan karena kelebihan berat badan",
          point: 0,
        },
      ],
    },
    {
      id: 12,
      title:
        "Selain menurunkan berat badan dan mengencangkan otot, apa masalah terpenting yang ingin Anda selesaikan",
      answers: [
        { id: 0, title: "Tidur yang berkualitas", point: 0 },
        { id: 1, title: "Kurangi mengidam makanan", point: 0 },
        { id: 2, title: "Memiliki lebih banyak energi", point: 0 },
        { id: 3, title: "Meningkatkan suasana hati saya", point: 0 },
        { id: 4, title: "Memakai ukuran yang lebih kecil", point: 0 },
        { id: 5, title: "Memecahkan masalah penyakit", point: 0 },
      ],
    },
  ];