/*
Instructions for adding team member data from a google form:

We assume that the data is arranged in columns: Name | Email | LinkedIn | Role | Picture | Bio

If not already done, select the picture link of all new entries, right click, and select Smart Chips -> File.

Select and copy the relevant rows for the aforementioned 6 columns (name to bio).

Paste this data in a new line inside the data_strings array. (Works best in my VSCode if this is pasted in a line with no indentation)

Add quotation marks onto the beginning and end of each new line and add commas to the ends of each line.
    \-> this can be done in VSCode by selecting the start of the lines with Alt + click or Alt + Shift + click, and then getting to the end of the lines by navigating left and one down
Make sure to add a comma to the string before the one(s) you pasted in.

If applicable, run any HEIC files through this converter:
https://heictojpg.com/ or https://www.iloveimg.com/convert-to-jpg
Don't update the file names in the strings, this will be done automatically. 

Go to the form's image folder in google drive (can be accessed through the form) and then download all images.
Go to https://redketchup.io/bulk-image-resizer and "Resize By File Size" to have "Max. File Size 200KB" and download all. This is to ensure that the website loads quickly.
Upload all the images to the images/[SEMESTER]team folder (respective semester's folder).

If images are not centered, crop them to be centered around the face:
https://imageresizer.com/crop-image
*/

/*
const cards_table_string = `Alex Pease	alexpease04@berkeley.edu	https://www.linkedin.com/in/alexpease04/	External Vice President	DSC_1215 - Alexander Pease.JPG	Hi, I'm Alex! I like singing, learning new sports, and chemistry.
Gavin Lai	glai@berkeley.edu	www.linkedin.com/in/gavin-lai-39940b32b	Client Track Member	Yosemite - Gavin Hongchi Lai.jpg	I love swimming (like a lot a lot)!!! Math is cool and coding is rad. Hardcore Clash of Clans player.
Mikayla Acosta	macosta28@berkeley.edu	https://www.linkedin.com/in/mikayla-acosta-89636a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Social Chair	IMG_1620 - Mikayla Gu Acosta.jpeg	Hi, I’m Mikayla and I love to try new things to eat, eat my favorite foods over and over again, and soak in the sun :))
Brandon Carlos	brandon.carlos@berkeley.edu	https://www.linkedin.com/in/brandon-carlos-3b20052a3/	Curriculum Member	IMG_1307 - Brandon Carlos.heic	hi I'm brandon and i love listening to music, eating, and being an all around night owl. 
Srikala Munukutla	srikala.v.munukutla@berkeley.edu	www.linkedin.com/in/srikalamunukutla	Social Chair	DSCN8060 - Srikala Munukutla.jpg	Hey, I’m Srikala! I love singing, trying new food spots, hanging out with friends, and being spontaneous.
Christopher Kim	christopherkim@berkeley.edu	http://linkedin.com/in/ckim259	Client Track Member	IMG_4075 - Chris Kim.jpeg	I’m Chris, and I like playing basketball, the gym, and exploring new restaurants.
Robin Hadveck	robin.faith@berkeley.edu	www.linkedin.com/in/robin-hadveck-04099432b	Curriculum Member	82EC3BA4-838F-4E6D-A9C9-96F8DFEFD16A - Robin Hadveck.jpg	Hello, I'm Robin! I love cooking, running, brains, playing instruments and speaking French.
Daniel Lief	daniel_lief@berkeley.edu	https://www.linkedin.com/in/daniel-lief-356009314/	Client Track Member	PXL_20250112_005824703 - Daniel W Lief.jpg	Hi, I'm Daniel! I like coding, chess, and playing tennis.
Priya Venkatesan	priyavenkatesan@berkeley.edu	www.linkedin.com/in/priya-venkatesan-me	Client Track Member	IMG_1489 2 - Priya Darshini Venkatesan.HEIC	Hi, I'm Priya. I enjoy reading science fiction, napping, and drinking strawberry matcha!
Sara Jangid	sarajangid@berkeley.edu	https://www.linkedin.com/in/sara-jangid-62968b2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Curriculum Chair	IMG_9502 - Sara Jangid.jpeg	Hii i’m Sara! I love watching sitcoms, listening to music and playing board/card games.
Kelly Tang	ygtang@berkeley.edu	https://www.linkedin.com/in/kelly-yuguo-tang/	Client Track Member	IMG_3417 - Kelly Tang.JPG	Hi, I'm Kelly! I like dancing, traveling, and trying good food!
Larry Zhang	larry_zhang@berkeley.edu	www.linkedin.com/in/larry-zhang-0009a0348	Curriculum Member	image - Larry Zhang.jpg	Hi, I'm Larry! I like basketball, game, sushi, anime, manga, and building PC!
Nikita Parakala 	nikita_parakala@berkeley.edu 	https://www.linkedin.com/in/nikita-parakala-ab3abb330/ 	Curriculum Member	IMG_2393 - Nikita Parakala.jpeg	Hi, I'm Nikita! I love playing tennis, getting coffee, and watching football. I'm looking forward to this semester at Code For Good! 
Brenton Outangoun	brenton_outangoun@berkeley.edu	www.linkedin.com/in/brenton-outangoun	Client Track Member	IMG_3014 4 - Brenton Dan Outangoun.heic	Hi, I'm Brenton! I like getting food with friends and working out.
Anshika Ojha	anshikaojha@berkeley.edu	https://www.linkedin.com/in/anshikaojha	Client Track Member	IMG_3480 - Anshika Ojha.jpeg	Hiiiii, I’m Anshika! I love singing, dancing, playing the guitar, sunset drives, and spontaneous outings.
Kuljit Uppal	kuljit@berkeley.edu	https://linkedin.com/in/kuljitu	Project Manager	Kuljit Uppal - Kuljit Uppal.jpg	Hey! My name is Kuljit and I like playing tennis, hiking, and watching movies.
Divij Muthu	divij_muthu@berkeley.edu	https://www.linkedin.com/in/divij-muthu/	Client Track Member	Screenshot_2024-09-02_at_12.04.46_PM - Divij Muthu.png	Hey, I'm Divij! I enjoy strategy games, reading, and exploring new places.
Claire Beaudin	claire.beaudin@berkeley.edu		Project Manager	IMG_2266 - Max.HEIC	Hi, I'm Claire! I love taking care of plants, playing Zeldas, and designing/building stuff at Jacobs Hall :)
Gabryel Soh	gabryelsoh@berkeley.edu	linkedin.com/in/gabryel-soh	Client Track Member	photo_2025-02-11_14-32-52 - Gabryel Cher Chin Soh.jpg	Hey I'm Gabryel. Love karaoke so hmu if u wanna sing!! 
Krithika Singh	krithikasingh@berkeley.edu	https://www.linkedin.com/in/krithikasingh/	Client Track Member	Screenshot 2025-02-11 at 2.57.28 PM - Krithika Singh.png	Hi, I'm Krithika! I love hiking, listening to music, and coffee flavored anything!
Ana Curtis	anavcurtis@berkeley.edu	https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin	Curriculum Member	IMG_2935 - Ana Curtis.jpeg	Hello, I'm Ana!! I love drawing, listening to music, and surfing the web. 
Winston Yan	winstony@berkeley.edu	https://www.linkedin.com/in/winston-yan-5a5580295/	Client Track Member	hs_processed - Winston Yan.png	Hello! I'm Winston, a Freshman majoring in EECS, and I love skiing and playing volleyball (pull up to RSF open gyms 🙏)!
Jason Chan	Jcshun@berkeley.edu	LinkedIn.com/in/jason-lokc	Client Track Member	IMG_2336 - Jason Chan.jpg	Hi, I'm Jason! I enjoy playing tennis, trying out food, and playing games!
Julianna Martinez	julianna.jolynn@berkeley.edu	www.linkedin.com/in/julianna-jolynn-martinez-ab7a22350	Curriculum Member	7168D795-B884-4511-9F7B-582F1C39DEFC - Julianna Jolynn Martinez.JPG	Hi! I'm Julianna! I like martial arts, listening to music (kpop), and watching movies/tv! 
Bo Wang	bo.wang@berkeley.edu	https://www.linkedin.com/in/bo-wang-35647b285/	Curriculum Member	64B9F436-F015-4C86-A047-8E3B41127B58 - Bo Wang.jpg	Hi! I'm Bo, and I enjoy playing soccer and ping-pong, exploring new cultures and languages, and eating ramen. 
Stephen Park	s.park0@berkeley.edu	https://www.linkedin.com/in/stephen-park-53640332b/	Project Manager	headshot - Stephen S Park.jpg	Hi I'm Stephen an EECS student at Cal! I like watching movies, playing video games, reading books, photography, and playing video games. I also have two (idiot) cats!
Ethan Jang	eef.jang@berkeley.edu	https://www.linkedin.com/in/ethan-jang-917b95345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app	Client Track Member	20250211_171122 - Ethan Jang.jpg	Would you love me if I was a worm? Shake your head if yes, implement a doubly-linked list in Java with no skeleton code if no :3.
Miranda Zhu	Mirandazhu@berkeley.edu	www.linkedin.com/in/zhu-miranda	Client Track Member	IMG_9470 - Miranda Zhu.JPG	Hi, I'm Miranda:)  I'm a junior in data science & statistics, I like dancing, singing, hiking, and watching all kinds of shows.
Tracy Law	tracylaw@berkeley.edu	www.linkedin.com/in/tracywlaw	Curriculum Member	DSC05290 copy - Tracy Wenyi Law.jpg	Hi! I'm Tracy :) I love sweets, reading, watching shows, catching sunsets and all things Disney!
Bryce Lim	brycelim@berkeley.edu	https://www.linkedin.com/in/bryce-lim-b78148281/	Curriculum Member	image_2025-02-11_175539131 - Bryce Lim.png	Hi I'm Bryce! I'm an EECS major, and enjoy coding and playing rhythm games.  
Jamie Jang	02jamiejang@berkeley.edu	https://www.linkedin.com/in/jaemin-jang-153079221/	Curriculum Member	KakaoTalk_20250212_105712829 copy - Jamie Jang.jpg	Hi, I'm Jamie. I like basketball.
Archana Srinivasan	archanasri@berkeley.edu	www.linkedin.com/in/archana-srini-423868243	Curriculum Member	20240927_005126013_iOS 2 - Archana Srinivasan.HEIC	Hi, I'm Archana! I love playing the piano and hiking!
Jonathan Mui	jrmui@berkeley.edu	https://www.linkedin.com/in/jonathan-mui/	Client Track Member	Screenshot 2025-02-11 at 5.49.16 PM - Jonathan Ryan Mui.png	Hi! I'm Jonathan, a 2nd year DS+CS from Chicago! I like exploring new cities, lion dancing, swimming, and going on late night walks/car rides :)
Terry Chen	terrychen13@berkeley.edu	https://www.linkedin.com/in/chenterry/	Client Track Member	Sharpen Upscale Terry - Terry Chen.JPG	Hi my name is Terry. I like to eat and sleep.
Cameron Leung	cameronleung@berkeley.edu	https://www.linkedin.com/in/cameron-leung-7a826717a/ 	Publicity Chair	Screenshot 2024-09-27 at 9.17.05 AM - Cameron M Leung.png	Hallo! I'm Cameron and I'm from the Bay. I'm an advocate for the beach, thrifting, and skiing
Juyeon Ma	jyma0218@berkeley.edu	https://www.linkedin.com/in/juyeon-ma-5652821b7/	Client Track Member	IMG_1407 - Juyeon Ma.JPG	Hi, I'm Juyeon! I like ice americano, salad, and crumble cookies.
Shruti Vora	shruti.s.vora@berkeley.edu	https://www.linkedin.com/in/shruti-vora-bb8471241/	Client Track Member	Screen Shot 2025-02-11 at 7.53.51 PM - Shruti Sujal Vora.png	Hi, I am Shruti! I like baking/cooking, painting, traveling, spending time with family and friends, and love ice-cream!! :)
Shreya Vora	shreya.sm.vora@berkeley.edu	https://www.linkedin.com/in/shreya-s-vora/	Client Track Member	Screenshot 2025-02-11 at 7.55.07 PM - Shreya Sujal Vora.png	Hi, I'm Shreya! I am a sophomore studying data science and cognitive science. I like baking, reading, spending time with family, and binging tv shows.
Caden Lewis	cadenlewis@berkeley.edu	https://www.linkedin.com/in/caden-lewis/	Client Track Member	IMG_6249 - Caden Robert Lewis.jpeg	Hey, I'm Caden! I like playing volleyball, surfing, and chilling with my friends.
Hannah Dermawan	hannahdermawan@berkeley.edu	www.linkedin.com/in/hannah-dermawan	Client Track Member	Screenshot 2025-02-11 at 7.57.16 PM - hannah dermawan.jpeg	Hi I'm Hannah! I love playing tennis, drinking boba, and going on spontaneous adventures! I also love good food so I’m always down to try out new restos!
Sadhika Adicherla	sadhikaadicherla@berkeley.edu	linkedin.com/in/sadhika-adicherla-a23211287	Client Track Member	professional photo - Sadhika Vallari Adicherla.jpg	Hi! I'm Sadhika! I love art, traveling, and coffee shops!
Anirra Kutty	anirra_kutty@berkeley.edu	https://www.linkedin.com/in/anirra-kutty-b8b938347/	Client Track Member	IMG_0779_Original - Anirra Nitiya Kutty.jpg	Hi! I’m Anirra, I love cats, baking, and finding new places to eat!
Sophie Tau	sophietau6@berkeley.edu	https://www.linkedin.com/in/sophie-tau-419350279/	Recruitment Chair	IMG_9456 - Sophie Tau.HEIC	hi i'm sophie and i love freshroll jpegmafia and long runs 
Garima Upadhyay	garimau@berkeley.edu	https://www.linkedin.com/in/garimaupadhyay35	Project Manager	Garima_Upadhyay - Garima Upadhyay.png	Hey, I'm Garima! In my free time, I love reading, making niche playlists, and trying out new restaurants/cafes with friends!
Kate Chu	kate_chu@berkeley.edu	https://www.linkedin.com/in/kate-chu-37ab59327?trk=contact-info	Treasurer	IMG_5267 - Kate Chu.jpeg	Hey, i’m Kate! I love nature, concerts, vintage shopping, and the beach. 
Yusrah Khan	yusrahk@berkeley.edu	https://www.linkedin.com/in/yusrah-khan/	Project Manager	IMG_6136 - Yusrah Khan.jpeg	hii im Yusrah, i love binging tv shows, exploring cute shops and hanging out with friends! 
Maixin Zhang	maixin77@berkeley.edu	https://www.linkedin.com/in/maixin-zhang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Client Track Member	DSCF1166 - Maixin Zhang.jpeg	Hi, I’m maixin!! I’m a sophomore major in computer science and psychology. I like traveling, baking, photographing:D
Zoey Yang	zy2004@berkeley.edu	https://www.linkedin.com/in/zoey-yang-90b5b9286/	Client Track Member	IMG_8469 - Zoey Yang.JPG	Hi, I’m Zoey. I am a huge durian and tropical fruit lover!
Prisha Raj	merisa.prisha.raj@berkeley.edu	http://linkedin.com/in/prisharaj	Client Track Member	cfg pic - Prisha Raj.heic	Hi, I’m Prisha! I like junk journaling and collecting smiskis!
Nirali Shah	nirali.shah@berkeley.edu	https://www.linkedin.com/in/niralishah05/	Project Manager	C0308A27-1E24-4CF1-BFEE-EC31D010415C - Nirali Shah.JPG	Hi, I'm Nirali! I really like coffee, watching Netflix, and trying new foods!
Sarah Zhang	sarahzh@berkeley.edu	linkedin.com/in/sarahwzhang	Client Track Member	IMG_5488 - Sarah Zhang.jpeg	Hey, I’m Sarah! I like watching movies and doing crosswords :p
Ishanth Hombaiah	ihombaiah@berkeley.edu	https://www.linkedin.com/in/ishanth-hombaiah/	Client Track Member	Ishanth_Picture - Ishanth Kiran Hombaiah.jpg	Hello, I'm Ishanth and I'm a freshman studying computer science. My hobbies are drawing, reading, and coding.
Sejal Bilwar	sejalbilwar@berkeley.edu	https://www.linkedin.com/in/sejal-bilwar/	Client Track Member	Sejal Bilwar - Photo - Sejal Bilwar.png	Hey, I'm Sejal! I love trying out new coffee shops and restaurants, spending time with friends, and dancing :)
Alex Toohey	alex_toohey@berkeley.edu	www.linkedin.com/in/alextoohey1	Recruitment Chair	Data 8 Website Photo - Alex Toohey.jpg	Hi, I'm Alex! I love playing tennis, hiking, skiing, and watching sports.
Shayla He	shaylahe@berkeley.edu	https://www.linkedin.com/in/shayla-he-70348b2b7/	Curriculum Chair	IMG_7104 - Shayla He.jpg	Hi, I'm Shayla! I love to sing, dance, play badminton, and get food/boba/dessert with friends :)
Tanya Agrawal	tanya.agrawal@berkeley.edu	www.linkedin.com/in/tanya-agrawal-2b58b5214	Client Track Member	94d19ef8-3ddc-439f-a5c1-f48d679a1ab0 - Tanya Agrawal.jpeg	Hi, I’m Tanya! I enjoy solving puzzles, hiking, reading and watching sitcoms. 
Raghav Nautiyal	nautiyal@berkeley.edu	https://www.linkedin.com/in/raghavnautiyal	Client Track Member	IMG_8181 - raghav nautiyal.png	I’m Raghav, I’m a second year EECS major. I like lifting and running.
Edward Zhang	edwardzhongweizhang@berkeley.edu	https://www.linkedin.com/in/edward-z-0b5995209	Client Track Member	golden_bridge - Edward Zhongwei Zhang.jpg	Hi, I am Edward! I enjoy playing Go (a kind of chess), calligraphy, classical music, and flying airplanes as a pilot.
Thomas Culhane	thomasjculhane@berkeley.edu	https://www.linkedin.com/in/tculhane/	President	PXL_20241212_005041923.jpg	Hi, I'm Thomas, a CS/Linguistics student from New Jersey! In my spare time, you can find me making bad jokes, eating too much cheese, or trying to talk like Tony Soprano.
Boris Tomov	boristomov@berkeley.edu	https://www.linkedin.com/in/boris-tomov-b45a53238/	Internal Vice President	IMG_20230314_221740 - Boris Boyanov Tomov.jpg	Hello, hello! I am a third year CS & DS enthusiast from Bulgaria. I am passionate about playing the guitar, swimming and any sort of outdoor adventures!
Emi Sakamoto	Esakamoto@berkeley.edu	https://www.linkedin.com/in/emi-sakamoto-113506271	Senior Advisor	IMG_1587 - Emi Sakamoto.jpeg	Hi I’m Emi! I like being outside, cats, and puzzles and trivia. 
Neha Haresh	neha.haresh@berkeley.edu	www.linkedin.com/in/neha-haresh	Project Manager	IMG_0122 3 - Neha Haresh.HEIC	hii, i'm neha! i'm studying cs+cog sci n i love cats, concert dates, and playing badminton :)
Brittney Chan	brittneychan@berkeley.edu	https://www.linkedin.com/in/brittney-chan/	Client Track Member	Brittney - Brittney Chan.JPG	Hi! I'm Brittney! I love love love cats, eating, and any spicy!
`; */

const cards_table_string = `
Gavin Lai	glai@berkeley.edu	www.linkedin.com/in/gavin-lai-39940b32b	Client Track Member	Yosemite - Gavin Hongchi Lai.jpg	I love swimming (like a lot a lot)!!! Math is cool and coding is rad. Hardcore Clash of Clans player.
Mikayla Acosta	macosta28@berkeley.edu	https://www.linkedin.com/in/mikayla-acosta-89636a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Social Chair	IMG_1620 - Mikayla Gu Acosta.jpeg	Hi, I’m Mikayla and I love to try new things to eat, eat my favorite foods over and over again, and soak in the sun :))
Brandon Carlos	brandon.carlos@berkeley.edu	https://www.linkedin.com/in/brandon-carlos-3b20052a3/	Curriculum Member	IMG_1307 - Brandon Carlos.heic	hi I'm brandon and i love listening to music, eating, and being an all around night owl. 
Srikala Munukutla	srikala.v.munukutla@berkeley.edu	www.linkedin.com/in/srikalamunukutla	Social Chair	DSCN8060 - Srikala Munukutla.jpg	Hey, I’m Srikala! I love singing, trying new food spots, hanging out with friends, and being spontaneous.
Christopher Kim	christopherkim@berkeley.edu	http://linkedin.com/in/ckim259	Client Track Member	IMG_4075 - Chris Kim.jpeg	I’m Chris, and I like playing basketball, the gym, and exploring new restaurants.
Robin Hadveck	robin.faith@berkeley.edu	www.linkedin.com/in/robin-hadveck-04099432b	Curriculum Member	82EC3BA4-838F-4E6D-A9C9-96F8DFEFD16A - Robin Hadveck.jpg	Hello, I'm Robin! I love cooking, running, brains, playing instruments and speaking French.
Daniel Lief	daniel_lief@berkeley.edu	https://www.linkedin.com/in/daniel-lief-356009314/	Client Track Member	PXL_20250112_005824703 - Daniel W Lief.jpg	Hi, I'm Daniel! I like coding, chess, and playing tennis.
Priya Venkatesan	priyavenkatesan@berkeley.edu	www.linkedin.com/in/priya-venkatesan-me	Client Track Member	IMG_1489 2 - Priya Darshini Venkatesan.HEIC	Hi, I'm Priya. I enjoy reading science fiction, napping, and drinking strawberry matcha!
Sara Jangid	sarajangid@berkeley.edu	https://www.linkedin.com/in/sara-jangid-62968b2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Curriculum Chair	IMG_9502 - Sara Jangid.jpeg	Hii i’m Sara! I love watching sitcoms, listening to music and playing board/card games.
Kelly Tang	ygtang@berkeley.edu	https://www.linkedin.com/in/kelly-yuguo-tang/	Client Track Member	IMG_3417 - Kelly Tang.JPG	Hi, I'm Kelly! I like dancing, traveling, and trying good food!
Larry Zhang	larry_zhang@berkeley.edu	www.linkedin.com/in/larry-zhang-0009a0348	Curriculum Member	image - Larry Zhang.jpg	Hi, I'm Larry! I like basketball, game, sushi, anime, manga, and building PC!
Nikita Parakala 	nikita_parakala@berkeley.edu 	https://www.linkedin.com/in/nikita-parakala-ab3abb330/ 	Curriculum Member	IMG_2393 - Nikita Parakala.jpeg	Hi, I'm Nikita! I love playing tennis, getting coffee, and watching football. I'm looking forward to this semester at Code For Good! 
Brenton Outangoun	brenton_outangoun@berkeley.edu	www.linkedin.com/in/brenton-outangoun	Client Track Member	IMG_3014 4 - Brenton Dan Outangoun.heic	Hi, I'm Brenton! I like getting food with friends and working out.
Anshika Ojha	anshikaojha@berkeley.edu	https://www.linkedin.com/in/anshikaojha	Client Track Member	IMG_3480 - Anshika Ojha.jpeg	Hiiiii, I’m Anshika! I love singing, dancing, playing the guitar, sunset drives, and spontaneous outings.
Kuljit Uppal	kuljit@berkeley.edu	https://linkedin.com/in/kuljitu	Project Manager	Kuljit Uppal - Kuljit Uppal.jpg	Hey! My name is Kuljit and I like playing tennis, hiking, and watching movies.
Divij Muthu	divij_muthu@berkeley.edu	https://www.linkedin.com/in/divij-muthu/	Client Track Member	Screenshot_2024-09-02_at_12.04.46_PM - Divij Muthu.png	Hey, I'm Divij! I enjoy strategy games, reading, and exploring new places.
Claire Beaudin	claire.beaudin@berkeley.edu		Project Manager	IMG_2266 - Max.HEIC	Hi, I'm Claire! I love taking care of plants, playing Zeldas, and designing/building stuff at Jacobs Hall :)
Gabryel Soh	gabryelsoh@berkeley.edu	linkedin.com/in/gabryel-soh	Client Track Member	photo_2025-02-11_14-32-52 - Gabryel Cher Chin Soh.jpg	Hey I'm Gabryel. Love karaoke so hmu if u wanna sing!! 
Krithika Singh	krithikasingh@berkeley.edu	https://www.linkedin.com/in/krithikasingh/	Client Track Member	Screenshot 2025-02-11 at 2.57.28 PM - Krithika Singh.png	Hi, I'm Krithika! I love hiking, listening to music, and coffee flavored anything!
Ana Curtis	anavcurtis@berkeley.edu	https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin	Curriculum Member	IMG_2935 - Ana Curtis.jpeg	Hello, I'm Ana!! I love drawing, listening to music, and surfing the web. 
Winston Yan	winstony@berkeley.edu	https://www.linkedin.com/in/winston-yan-5a5580295/	Client Track Member	hs_processed - Winston Yan.png	Hello! I'm Winston, a Freshman majoring in EECS, and I love skiing and playing volleyball (pull up to RSF open gyms 🙏)!
Jason Chan	Jcshun@berkeley.edu	LinkedIn.com/in/jason-lokc	Client Track Member	IMG_2336 - Jason Chan.jpg	Hi, I'm Jason! I enjoy playing tennis, trying out food, and playing games!
Julianna Martinez	julianna.jolynn@berkeley.edu	www.linkedin.com/in/julianna-jolynn-martinez-ab7a22350	Curriculum Member	7168D795-B884-4511-9F7B-582F1C39DEFC - Julianna Jolynn Martinez.JPG	Hi! I'm Julianna! I like martial arts, listening to music (kpop), and watching movies/tv! 
Bo Wang	bo.wang@berkeley.edu	https://www.linkedin.com/in/bo-wang-35647b285/	Curriculum Member	64B9F436-F015-4C86-A047-8E3B41127B58 - Bo Wang.jpg	Hi! I'm Bo, and I enjoy playing soccer and ping-pong, exploring new cultures and languages, and eating ramen. 
Stephen Park	s.park0@berkeley.edu	https://www.linkedin.com/in/stephen-park-53640332b/	Project Manager	headshot - Stephen S Park.jpg	Hi I'm Stephen an EECS student at Cal! I like watching movies, playing video games, reading books, photography, and playing video games. I also have two (idiot) cats!
Ethan Jang	eef.jang@berkeley.edu	https://www.linkedin.com/in/ethan-jang-917b95345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app	Client Track Member	20250211_171122 - Ethan Jang.jpg	Would you love me if I was a worm? Shake your head if yes, implement a doubly-linked list in Java with no skeleton code if no :3.
Miranda Zhu	Mirandazhu@berkeley.edu	www.linkedin.com/in/zhu-miranda	Client Track Member	IMG_9470 - Miranda Zhu.JPG	Hi, I'm Miranda:)  I'm a junior in data science & statistics, I like dancing, singing, hiking, and watching all kinds of shows.
Tracy Law	tracylaw@berkeley.edu	www.linkedin.com/in/tracywlaw	Curriculum Member	DSC05290 copy - Tracy Wenyi Law.jpg	Hi! I'm Tracy :) I love sweets, reading, watching shows, catching sunsets and all things Disney!
Bryce Lim	brycelim@berkeley.edu	https://www.linkedin.com/in/bryce-lim-b78148281/	Curriculum Member	image_2025-02-11_175539131 - Bryce Lim.png	Hi I'm Bryce! I'm an EECS major, and enjoy coding and playing rhythm games.  
Jamie Jang	02jamiejang@berkeley.edu	https://www.linkedin.com/in/jaemin-jang-153079221/	Curriculum Member	KakaoTalk_20250212_105712829 copy - Jamie Jang.jpg	Hi, I'm Jamie. I like basketball.
Archana Srinivasan	archanasri@berkeley.edu	www.linkedin.com/in/archana-srini-423868243	Curriculum Member	20240927_005126013_iOS 2 - Archana Srinivasan.HEIC	Hi, I'm Archana! I love playing the piano and hiking!
Jonathan Mui	jrmui@berkeley.edu	https://www.linkedin.com/in/jonathan-mui/	Client Track Member	Screenshot 2025-02-11 at 5.49.16 PM - Jonathan Ryan Mui.png	Hi! I'm Jonathan, a 2nd year DS+CS from Chicago! I like exploring new cities, lion dancing, swimming, and going on late night walks/car rides :)
Terry Chen	terrychen13@berkeley.edu	https://www.linkedin.com/in/chenterry/	Client Track Member	Sharpen Upscale Terry - Terry Chen.JPG	Hi my name is Terry. I like to eat and sleep.
Cameron Leung	cameronleung@berkeley.edu	https://www.linkedin.com/in/cameron-leung-7a826717a/ 	Publicity Chair	Screenshot 2024-09-27 at 9.17.05 AM - Cameron M Leung.png	Hallo! I'm Cameron and I'm from the Bay. I'm an advocate for the beach, thrifting, and skiing
Juyeon Ma	jyma0218@berkeley.edu	https://www.linkedin.com/in/juyeon-ma-5652821b7/	Client Track Member	IMG_1407 - Juyeon Ma.JPG	Hi, I'm Juyeon! I like ice americano, salad, and crumble cookies.
Shruti Vora	shruti.s.vora@berkeley.edu	https://www.linkedin.com/in/shruti-vora-bb8471241/	Client Track Member	Screen Shot 2025-02-11 at 7.53.51 PM - Shruti Sujal Vora.png	Hi, I am Shruti! I like baking/cooking, painting, traveling, spending time with family and friends, and love ice-cream!! :)
Shreya Vora	shreya.sm.vora@berkeley.edu	https://www.linkedin.com/in/shreya-s-vora/	Client Track Member	Screenshot 2025-02-11 at 7.55.07 PM - Shreya Sujal Vora.png	Hi, I'm Shreya! I am a sophomore studying data science and cognitive science. I like baking, reading, spending time with family, and binging tv shows.
Caden Lewis	cadenlewis@berkeley.edu	https://www.linkedin.com/in/caden-lewis/	Client Track Member	IMG_6249 - Caden Robert Lewis.jpeg	Hey, I'm Caden! I like playing volleyball, surfing, and chilling with my friends.
Hannah Dermawan	hannahdermawan@berkeley.edu	www.linkedin.com/in/hannah-dermawan	Client Track Member	Screenshot 2025-02-11 at 7.57.16 PM - hannah dermawan.jpeg	Hi I'm Hannah! I love playing tennis, drinking boba, and going on spontaneous adventures! I also love good food so I’m always down to try out new restos!
Sadhika Adicherla	sadhikaadicherla@berkeley.edu	linkedin.com/in/sadhika-adicherla-a23211287	Client Track Member	professional photo - Sadhika Vallari Adicherla.jpg	Hi! I'm Sadhika! I love art, traveling, and coffee shops!
Anirra Kutty	anirra_kutty@berkeley.edu	https://www.linkedin.com/in/anirra-kutty-b8b938347/	Client Track Member	IMG_0779_Original - Anirra Nitiya Kutty.jpg	Hi! I’m Anirra, I love cats, baking, and finding new places to eat!
Sophie Tau	sophietau6@berkeley.edu	https://www.linkedin.com/in/sophie-tau-419350279/	Recruitment Chair	IMG_9456 - Sophie Tau.HEIC	hi i'm sophie and i love freshroll jpegmafia and long runs 
Garima Upadhyay	garimau@berkeley.edu	https://www.linkedin.com/in/garimaupadhyay35	Project Manager	Garima_Upadhyay - Garima Upadhyay.png	Hey, I'm Garima! In my free time, I love reading, making niche playlists, and trying out new restaurants/cafes with friends!
Kate Chu	kate_chu@berkeley.edu	https://www.linkedin.com/in/kate-chu-37ab59327?trk=contact-info	Treasurer	IMG_5267 - Kate Chu.jpeg	Hey, i’m Kate! I love nature, concerts, vintage shopping, and the beach. 
Yusrah Khan	yusrahk@berkeley.edu	https://www.linkedin.com/in/yusrah-khan/	Internal Vice President	IMG_6136 - Yusrah Khan.jpeg	hii im Yusrah, i love binging tv shows, exploring cute shops and hanging out with friends! 
Maixin Zhang	maixin77@berkeley.edu	https://www.linkedin.com/in/maixin-zhang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Client Track Member	DSCF1166 - Maixin Zhang.jpeg	Hi, I’m maixin!! I’m a sophomore major in computer science and psychology. I like traveling, baking, photographing:D
Zoey Yang	zy2004@berkeley.edu	https://www.linkedin.com/in/zoey-yang-90b5b9286/	Client Track Member	IMG_8469 - Zoey Yang.JPG	Hi, I’m Zoey. I am a huge durian and tropical fruit lover!
Prisha Raj	merisa.prisha.raj@berkeley.edu	http://linkedin.com/in/prisharaj	Client Track Member	cfg pic - Prisha Raj.heic	Hi, I’m Prisha! I like junk journaling and collecting smiskis!
Nirali Shah	nirali.shah@berkeley.edu	https://www.linkedin.com/in/niralishah05/	President	C0308A27-1E24-4CF1-BFEE-EC31D010415C - Nirali Shah.JPG	Hi, I'm Nirali! I really like coffee, watching Netflix, and trying new foods!
Sarah Zhang	sarahzh@berkeley.edu	linkedin.com/in/sarahwzhang	Client Track Member	IMG_5488 - Sarah Zhang.jpeg	Hey, I’m Sarah! I like watching movies and doing crosswords :p
Ishanth Hombaiah	ihombaiah@berkeley.edu	https://www.linkedin.com/in/ishanth-hombaiah/	Client Track Member	Ishanth_Picture - Ishanth Kiran Hombaiah.jpg	Hello, I'm Ishanth and I'm a freshman studying computer science. My hobbies are drawing, reading, and coding.
Sejal Bilwar	sejalbilwar@berkeley.edu	https://www.linkedin.com/in/sejal-bilwar/	Client Track Member	Sejal Bilwar - Photo - Sejal Bilwar.png	Hey, I'm Sejal! I love trying out new coffee shops and restaurants, spending time with friends, and dancing :)
Alex Toohey	alex_toohey@berkeley.edu	www.linkedin.com/in/alextoohey1	Recruitment Chair	Data 8 Website Photo - Alex Toohey.jpg	Hi, I'm Alex! I love playing tennis, hiking, skiing, and watching sports.
Shayla He	shaylahe@berkeley.edu	https://www.linkedin.com/in/shayla-he-70348b2b7/	External Vice President	IMG_7104 - Shayla He.jpg	Hi, I'm Shayla! I love to sing, dance, play badminton, and get food/boba/dessert with friends :)
Tanya Agrawal	tanya.agrawal@berkeley.edu	www.linkedin.com/in/tanya-agrawal-2b58b5214	Client Track Member	94d19ef8-3ddc-439f-a5c1-f48d679a1ab0 - Tanya Agrawal.jpeg	Hi, I’m Tanya! I enjoy solving puzzles, hiking, reading and watching sitcoms. 
Raghav Nautiyal	nautiyal@berkeley.edu	https://www.linkedin.com/in/raghavnautiyal	Client Track Member	IMG_8181 - raghav nautiyal.png	I’m Raghav, I’m a second year EECS major. I like lifting and running.
Edward Zhang	edwardzhongweizhang@berkeley.edu	https://www.linkedin.com/in/edward-z-0b5995209	Client Track Member	golden_bridge - Edward Zhongwei Zhang.jpg	Hi, I am Edward! I enjoy playing Go (a kind of chess), calligraphy, classical music, and flying airplanes as a pilot.
Thomas Culhane	thomasjculhane@berkeley.edu	https://www.linkedin.com/in/tculhane/	President	PXL_20241212_005041923.jpg	Hi, I'm Thomas, a CS/Linguistics student from New Jersey! In my spare time, you can find me making bad jokes, eating too much cheese, or trying to talk like Tony Soprano.
Boris Tomov	boristomov@berkeley.edu	https://www.linkedin.com/in/boris-tomov-b45a53238/	Internal Vice President	IMG_20230314_221740 - Boris Boyanov Tomov.jpg	Hello, hello! I am a third year CS & DS enthusiast from Bulgaria. I am passionate about playing the guitar, swimming and any sort of outdoor adventures!
Emi Sakamoto	Esakamoto@berkeley.edu	https://www.linkedin.com/in/emi-sakamoto-113506271	Senior Advisor	IMG_1587 - Emi Sakamoto.jpeg	Hi I’m Emi! I like being outside, cats, and puzzles and trivia. 
Neha Haresh	neha.haresh@berkeley.edu	www.linkedin.com/in/neha-haresh	Project Manager	IMG_0122 3 - Neha Haresh.HEIC	hii, i'm neha! i'm studying cs+cog sci n i love cats, concert dates, and playing badminton :)
Brittney Chan	brittneychan@berkeley.edu	https://www.linkedin.com/in/brittney-chan/	Client Track Member	Brittney - Brittney Chan.JPG	Hi! I'm Brittney! I love love love cats, eating, and any spicy!
`;

const FOLDER_NAME = "sp25team"
/*
const officer_names = [
  "Thomas Culhane",
  "Boris Tomov",
  "Alex Pease",
  "Neha Haresh",
  "Yusrah Khan",
  "Stephen Park",
  "Clinton Nguyen",
  "Kuljit Uppal",
  "Cameron Leung",
  "Nirali Shah",
  "Sophie Tau",
  "Kate Chu",
  "Garima Upadhyay",
  "Claire Beaudin",
  "Srikala Munukutla",
  "Mikayla Acosta",
  "Sophie Tau",
  "Alex Toohey",
  "Sara Jangid",
  "Shayla He"
]; */

const officer_names = [
  "Nirali Shah",
  "Yusrah Khan",
  "Shayla He",
  "Neha Haresh",
  "Stephen Park",
  "Clinton Nguyen",
  "Kuljit Uppal",
  "Cameron Leung",
  "Sophie Tau",
  "Kate Chu",
  "Garima Upadhyay",
  "Claire Beaudin",
  "Srikala Munukutla",
  "Mikayla Acosta",
  "Sophie Tau",
  "Alex Toohey",
  "Sara Jangid"
];



const project_table_string = `Planned Parenthood	1951 Coffee Co.	Think of Us	SIREN	The Roxie	Research
Neha Haresh	Nirali Shah	Stephen Park	Clinton Nguyen	Thomas Culhane	Boris Tomov
Yusrah Khan	Garima Upadhyay		Kuljit Uppal		Claire Beaudin
Alex Pease	Brittney Chan	Sejal Bilwar	Emi Sakamoto		
Gabryel Soh	Divij Muthu	Daniel Lief	Jason Chan	Kate Chu	Kelly Tang
Ishanth Hombaiah	Caden Lewis	Gavin Lai	Christopher Kim	Sarah Zhang	Brenton Outangoun
Shruti Vora	Zoey Yang	Sadhika Adicherla	Winston Yan	Jonathan Mui	Shreya Vora
Krithika Singh	Juyeon Ma	Srikala Munukutla	Alex Toohey	Prisha Raj	Edward Zhang
Priya Venkatesan	Anirra Kutty	Raghav Nautiyal	Maixin Zhang	Hannah Dermawan	Miranda Zhu
Ethan Jang	Mikayla Acosta	Terry Chen	Anshika Ojha		Tanya Agrawal
`

function shuffle(arr) {
  ct = arr.length;
  while (ct) {
    b = (Math.random() * ct--) | 0;
    d = arr[ct];
    arr[ct] = arr[b];
    arr[b] = d;
  }
}

function parse_table_string(str) {
  row_strings = str.split('\n')
  const num_cols = row_strings[1].split('\t').length

  const res = []
  
  for(const row_string of row_strings) {
    console.log(row_string)
    row_entries = row_string.split('\t')
    if(row_entries.length != num_cols) {
      console.log("skipping:")
      console.log(row_entries)
      continue;
    }
    console.log(row_entries)
    res.push(row_entries)
  }

  return res
}

// Set based on the behavior of the compression tool used
FILENAME_OPTIONS = {
  LOWERCASE_EXTENSIONS: true,
  HEIC_TO_JPG: true,
  JPEG_TO_JPG: true
}

function replace_filename_extension(filename) {
  console.log(filename)
  const split_fn = filename.split('.') // handles the case where file name has a period for some reason
  var ext = split_fn[split_fn.length - 1]
  console.log(split_fn)
  console.log(ext)
  if(FILENAME_OPTIONS.LOWERCASE_EXTENSIONS) {
    ext = ext.toLowerCase()
  }
  switch(ext.toLowerCase()) {
    case 'heic':
      if(FILENAME_OPTIONS.HEIC_TO_JPG) {
        ext = 'jpg';
      }
      break;
    case 'jpeg':
      if(FILENAME_OPTIONS.JPEG_TO_JPG) {
        ext = 'jpg';
      }
      break;
  }
  split_fn[split_fn.length - 1] = ext
  return split_fn.join('.')
}

function lookup_project(name, pairing_table) {
  for(var i = 1; i < pairing_table.length; i++) {
    idx = pairing_table[i].indexOf(name)
    if(idx !== -1) {
      return pairing_table[0][idx]
    }
  }
  return null
}

bio_data = parse_table_string(cards_table_string)
project_data = parse_table_string(project_table_string)

exec_data = []
leadership_data = []
team_data = []
console.log(bio_data)
for (const row of bio_data) {
  console.log(row)
  row[4] = replace_filename_extension(row[4])

  project = lookup_project(row[0], project_data)

  if (officer_names.includes(row[0])) {
    if(row[3].includes("President")) {
      exec_data.push(row);
    } else {
      if(row[3] == 'Project Manager' && project !== null) {
        row[3] = "PM - " + project
      }
      leadership_data.push(row);
    }
  } else {
    if(project !== null) {
      if(row[3] == "Senior Advisor") {
        row[3] = row[3] + " - " + project
      } else {
        row[3] = project;
      }
    }
    team_data.push(row);
  }
}

orderFunc = (a, b) => officer_names.indexOf(a[0]) - officer_names.indexOf(b[0])

//shuffle(exec_data);
exec_data.sort(orderFunc);

shuffle(leadership_data);
//leadership_data.sort(orderFunc);

shuffle(team_data);
//team_data.sort(orderFunc);

function make(tag, classes, children) {
  var node = document.createElement(tag);
  node.setAttribute("class", classes);
  if (children) {
    for (const child of children) {
      node.appendChild(child);
    }
  }
  return node;
}

/*
Card Template

<div class="col about-card-holder">
    <div class="about-card">
        <div class="card-front">
            <div class="card-face-holder">
                <img class="card-face" src="[Image Source]" />
            </div>
            <div class="card-title">
                <p> <b>[Name]</b> <br> [Title]</p>
            </div>
            
        </div>
        <div class="card-back">
            <p class="card-bio"> </p>
            <a href="[LinkedIn Link]" class="card-link-li"> </a>
            <a href="[Email Link]" class="card-link-em"> </a>
        </div>
    </div>
</div>
*/

template_element = make("div", "col about-card-holder", [
  make("div", "about-card", [
    make("div", "card-front", [
      make("div", "card-face-holder", [make("img", "card-face")]),
      make("div", "card-title", [make("p", "card-title-text")]),
    ]),
    make("div", "card-back", [
      make("p", "card-bio"),
      make("a", "card-link-li card-link"),
      make("a", "card-link-em card-link"),
    ]),
  ]),
]);

function populate_row_with_cards(node, card_data) {
  for (const data of card_data) {
    if (data.length == 6) {
      let name = data[0];
      let title = data[3];
      let img_src = data[4];
      let bio = data[5];
      let linkedin = data[2];
      if (linkedin.length > 2 && !linkedin.startsWith("https://")) {
        if (!linkedin.startsWith("www.")) {
          linkedin = "www." + linkedin;
        }
        linkedin = "https://" + linkedin;
      }

      let email = "mailto: " + data[1];

      card_element = template_element.cloneNode(true);
      front_text_element =
        card_element.getElementsByClassName("card-title-text")[0];
      face_element = card_element.getElementsByClassName("card-face")[0];
      bio_element = card_element.getElementsByClassName("card-bio")[0];
      linkedin_element = card_element.getElementsByClassName("card-link-li")[0];
      email_element = card_element.getElementsByClassName("card-link-em")[0];

      if (linkedin.length < 3) {
        card_element.firstChild.lastChild.removeChild(linkedin_element);
        email_element.className += " link-center";
      }

      front_text_element.innerHTML = "<b>" + name + "</b> <br>" + title;
      face_element.setAttribute("src", "images/" + FOLDER_NAME + "/" + img_src);
      bio_element.innerHTML = bio;
      linkedin_element.setAttribute("href", linkedin);
      email_element.setAttribute("href", email);

      node.appendChild(card_element);
    } else {
      console.error("Malformed card data: " + data);
    }
  }
}

populate_row_with_cards(document.getElementById("about-exec-row"), exec_data);
populate_row_with_cards(document.getElementById("about-officer-row"), leadership_data);
populate_row_with_cards(document.getElementById("about-team-row"), team_data);
