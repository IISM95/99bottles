let music = {
	text: "бутылок",
	text1: "бутылка",
	text3: "бутылки",
	generateSongText: function () {
	  for (i = 99; i >= 1; i--) {
		 music.generateSong(i);
	  }
	},
	generateSong: function () {
	 if(i==1){
		 console.log(`${i} ${this.text1} пива на стене, ${i} ${this.text1} пива!
Возьми одну, нет бутылок пива на стене!`);
	 }
	 else if(i == 21 || i == 31 || i == 41 || i == 51 || i == 61 || i==71 || i== 81 || i == 91){
		 console.log(`${i} ${this.text1} пива на стене, ${i} ${this.text1} пива!
Возьми одну, пусти по кругу, ${i - 1} ${this.text}`);
	 }
	 else if(i>1 && i<5 ||i>21 && i<25 || i>31 && i<35 || i>41 && i<45 || i>51 && i<55 || i>61 && i<65 || i>71 && i<75 || i>81 && i<85 || i>91 && i<95){
		 console.log(`${i} ${this.text3} пива на стене, ${i} ${this.text3} пива!
Возьми одну, пусти по кругу, ${i - 1} ${this.text}`);
	 } 
	 else if(i==95 || i == 85 || i== 75 || i == 65 || i ==55 || i == 45 || i == 35 || i == 25 || i ==5 ){
		 console.log(`${i} ${this.text} пива на стене, ${i} ${this.text} пива!
Возьми одну, пусти по кругу, ${i - 1} ${this.text3}`);
	 }
	 else if(i==2 || i==22 || i == 32 || i== 42 || i == 52 || i==52 || i == 62 || i ==72 || i ==82 || i==92){
		 console.log(`${i} ${this.text} пива на стене, ${i} ${this.text} пива!
Возьми одну, пусти по кругу, ${i - 1} ${this.text1}`)
	 }else {
		 console.log(`${i} ${this.text} пива на стене, ${i} ${this.text} пива!
Возьми одну, пусти по кругу, ${i - 1} ${this.text}`);
	 }
	},
 };
 music.generateSongText();
 
 