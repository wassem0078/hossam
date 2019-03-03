const  Discord  =  تتطلب ( ' discord.js ' )؛

CONST  UTIL  =  تتطلب ( ' discord.js ' )؛

CONST  getYoutubeID  =  تتطلب ( " الحصول على يوتيوب معرف " )؛

CONST  fetchVideoInfo  =  تتطلب ( ' يوتيوب اينفو " )؛

const  يوتيوب  =  تتطلب ( ' simple-youtube-api ' )؛

const  youtube  =  new  YouTube ( " AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8 " )؛

const  queue  =  new  Map ()؛

const  ytdl  =  تتطلب ( ' ytdl-core ' )؛

CONST  خ  =  تتطلب ( ' خ ' )؛

CONST  اف  =  تتطلب ( " اف-بحث " )؛

const  client  =  new  Discord.Client ({disableEveryone :  true })؛

const  prefix  =  " ! " ؛
// ///////////////////////
// //////////////////////

العميل . في ( ' message ' ، async  msg  => {
	إذا كانت ( msg . author . bot ) تُرجع  غير محددة ؛
    إذا ( ! msg . content . يبدأ مع (البادئة)) بإرجاع  غير معرفة ؛
    
    دع args =  msg . محتوى . انقسام ( '  ' )؛

	اترك الأمر =  msg . محتوى . toLowerCase (). split ( "  " ) [ 0 ]؛
	الأمر =  الأمر . شريحة ( البادئة . طول )

    إذا (القيادة ===  ` بينغ ` ) {
    دعونا تضمين =  جديد  Discord.RichEmbed ()
    . setColor ( 3447003 )
    . setTitle ( " Pong !! " )
    . setDescription ( ` $ { client . ping } ms، ` )
    . setFooter ( ` Requested by | $ { msg . author . tag } ` )؛
    رسالة . حذف (). اصطياد ( O_o => {})
    رسالة . قناة . إرسال (تضمين) ؛
    }
})؛
// ///////////////////////
// //////////////////////
// ////////////////////
العميل . في ( ' message ' ، async  msg  => {
	إذا كانت ( msg . author . bot ) تُرجع  غير محددة ؛
    إذا ( ! msg . content . يبدأ مع (البادئة)) بإرجاع  غير معرفة ؛
    
    دع args =  msg . محتوى . انقسام ( '  ' )؛

	اترك الأمر =  msg . محتوى . toLowerCase (). split ( "  " ) [ 0 ]؛
	الأمر =  الأمر . شريحة ( البادئة . طول )

    إذا (القيادة ===  ` الصورة الرمزية ` ) {
	إذا كان ( msg . channel . type  ===  ' dm ' ) return  msg . قناة . send ( " Nope Nope! u لا يمكن استخدام الأمر avatar في DMs (: " )
        دعونا ذكر =  رسالة . يذكر . أعضاء . الأول ()
        if ( ! mentions) {
          دع sicon =  msg . المؤلف . الصورة الرمزية (ورل
          دعونا تضمين =  جديد  Discord.RichEmbed ()
          . setImage ( msg . المؤلف . avatarURL )
          . setColor ( " # 5074b3 " )
          رسالة . قناة . أرسل ({embed})
        } آخر {
          دع sicon =  يذكر . المستخدم . الصورة الرمزية (ورل
          دعونا تضمين =  جديد  Discord.RichEmbed ()
          . setColor ( " # 5074b3 " )
          . setImage (sicon)
          رسالة . قناة . أرسل ({embed})
        }
    }؛
})؛
// ///////////////////////
// //////////////////////
// ////////////////////
// ///////////////////////
// //////////////////////
// ////////////////////

// ///////////////////////
// //////////////////////
// ////////////////////
// ///////////////////////
// //////////////////////
// ////////////////////
العميل . في ( ' message ' ، async  msg  => {
	إذا كانت ( msg . author . bot ) تُرجع  غير محددة ؛
    إذا ( ! msg . content . يبدأ مع (البادئة)) بإرجاع  غير معرفة ؛
    
    const  args  =  msg . محتوى . انقسام ( '  ' )؛
	const  searchString  =  args . شريحة ( 1 ). انضمام ( '  ' )؛
    
	CONST  رابط  = وسائط [ 1 ] ؟ args [ 1 ]. استبدل ( / <( . + )> / g ، ' $ 1 ' ) :  ' ' ؛
	const  serverQueue  =  قائمة الانتظار . get ( msg . guild . id )؛

	اترك الأمر =  msg . محتوى . toLowerCase (). split ( "  " ) [ 0 ]؛
	الأمر =  الأمر . شريحة ( البادئة . طول )

	إذا (القيادة ===  ` لعب ` ) {
		const  voiceChannel  =  msg . عضو . voiceChannel .
        
        إذا ( ! VoiceChannel) قم بإرجاع  msg . قناة . أرسل ( " لا يمكنني العثور عليك في أي قناة صوتية! " ) ؛
        
         أذونات  const =  voiceChannel . permissionsFor ( msg . client . user )؛
        
        إذا ( ! الأذونات . لدى ( ' CONNECT ' )) {

			عودة  msg . قناة . send ( " ليس لدي أذونات كافية للانضمام إلى قناتك الصوتية! " ) ؛
        }
        
		if ( ! permissions . has ( ' SPEAK ' )) {

			عودة  msg . قناة . أرسل ( " ليس لدي أذونات كافية للتحدث في قناتك الصوتية! " ) ؛
		}

		if ( ! permissions . has ( ' EMBED_LINKS ' )) {

			عودة  msg . قناة . sendMessage ( " ليس لدي أذونات كافية لإدراج عناوين URL! " )
		}

		إذا ( رابط . مباراة ( / ^ الشبكي ؟ : \ / \ / (شبكة الاتصالات العالمية . يوتيوب . كوم | يوتيوب . كوم) \ / قائمة التشغيل ( . * ) $ / )) {

			const  playlist  = في  انتظار  youtube . getPlaylist (رابط) ؛
             مقاطع الفيديو  const =  تنتظر  قائمة التشغيل . getVideos ()؛
            

			for ( const  video  of  Object . values (videos)) {
                
                const  video2  = في  انتظار  يوتيوب . getVideoByID ( فيديو . معرف ) ؛
                انتظر  handleVideo (video2، msg، voiceChannel، true )؛
            }
			عودة  msg . قناة . أرسل ( ` ** $ { playlist . title } ** ، فقط أضيف إلى قائمة الانتظار! ` ) ؛
		} آخر {

			حاول {

                var video = في  انتظار  youtube . getVideo (رابط) ؛
                
			} catch (خطأ) {
				حاول {

					var videos = في  انتظار  youtube . searchVideos (searchString، 5 )؛
					دعونا مؤشر =  0 ؛
                    const  embed1  =  new  Discord.RichEmbed ()
                    . setTitle ( " : mag_right: نتائج بحث YouTube: " )
                    . setDescription ( `
                    $ { videos . map ( video2  =>  ` $ { ++ index } . ** $ { video2 . title } ** ` ). انضمام ( ' \ n ' ) } ` )
                    
					. setColor ( " # f7abab " )
					رسالة . قناة . sendEmbed (embed1). ثم ( message  => { message . delete ( 20000 )})
					
// /////////////					
					حاول {

						var response =  await  msg . قناة . awaitMessages ( msg2  =>  msg2 . content  >  0  &&  msg2 . content  <  11 ، {
							maxMatches :  1 ،
							الوقت :  15000 ،
							أخطاء : [ ' وقت ' ]
						})؛
					} catch (err) {
						وحدة التحكم . خطأ (خطأ) ؛
						عودة  msg . قناة . أرسل ( " لا أحد يتنازل عن رقم !! " ) ؛
                    }
                    
					const  videoIndex  =  parseInt ( response . first (). content )؛
                    var video = في  انتظار  youtube . getVideoByID (videos [videoIndex -  1 ]. id )؛
                    
				} catch (err) {

					وحدة التحكم . خطأ (خطأ) ؛
					عودة  msg . قناة . أرسل ( " لم أجد أي نتائج! " ) ؛
				}
			}

            return  handleVideo (video، msg، voiceChannel)؛
            
        }
        
	} آخر  إذا (القيادة ===  ` تخطي ` ) {

		إذا ( ! msg . العضو . VoiceChannel ) قم بإرجاع  msg . قناة . send ( " يجب أن تكون في قناة Voice to Run the Music commands! " )؛
        إذا ( ! serverQueue) إرجاع  msg . قناة . أرسل ( " ليس هناك قائمة انتظار للتخطي !! " ) ؛

		serverQueue . اتصال . المرسل . نهاية ( " حسنا ، تخطي! " ) ؛
        العودة  غير معروف .
        
	} آخر  إذا (القيادة ===  ` وقف ` ) {

		إذا ( ! msg . العضو . VoiceChannel ) قم بإرجاع  msg . قناة . send ( " يجب أن تكون في قناة Voice to Run the Music commands! " )؛
        إذا ( ! serverQueue) إرجاع  msg . قناة . أرسل ( " لا توجد قائمة انتظار للتوقف !! " ) ؛
        
		serverQueue . الأغاني  = []؛
		serverQueue . اتصال . المرسل . نهاية ( " موافق ، تم إيقافه وفصله عن قناة الصوت الخاصة بك " ) ؛
        العودة  غير معروف .
        
	} آخر  إذا (القيادة ===  ` المجلد ` ) {

		إذا ( ! msg . العضو . VoiceChannel ) قم بإرجاع  msg . قناة . send ( " يجب أن تكون في قناة Voice to Run the Music commands! " )؛
		إذا ( ! serverQueue) إرجاع  msg . قناة . أرسل ( " يمكنك فقط استخدام هذا الأمر أثناء تشغيل الموسيقى! " ) ؛
        إذا ( ! args [ 1 ]) إرجاع  msg . قناة . send ( ` the volume volume is ** $ { serverQueue . volume } ** ` )؛
        
		serverQueue . volume  = args [ 1 ]؛
        serverQueue . اتصال . المرسل . setVolumeLogarithmic (args [ 1 ] /  50 )؛
        
        عودة  msg . قناة . send ( ` Volume Now is ** $ { args [ 1 ] } ** ` )؛

	} آخر  إذا (القيادة ===  ` أرستها ` ) {

		إذا ( ! serverQueue) إرجاع  msg . قناة . أرسل ( " ليس هناك قائمة انتظار! " ) ؛
		const  embedNP  =  new  Discord.RichEmbed ()
	    . setDescription ( ` now playing ** $ { serverQueue . songs [ 0 ]. title } ** ` )
        عودة  msg . قناة . sendEmbed (embedNP)؛
        
	} آخر  إذا (القيادة ===  ` طابور ` ) {
		
		إذا ( ! serverQueue) إرجاع  msg . قناة . أرسل ( " ليس هناك قائمة انتظار !! " ) ؛
		دعونا مؤشر =  0 ؛
// 	// //
		const  embedqu  =  new  Discord.RichEmbed ()
        . setTitle ( " The Queue Songs: " )
        . setDescription ( `
        $ { serverQueue . الأغاني . map ( song  =>  ` $ { ++ index } . ** $ { song . title } ** ` ). انضمام ( ' \ n ' ) }
** الآن اللعب: ** ** $ { serverQueue . الأغاني [ 0 ]. title } ** ` )
        . setColor ( " # f7abab " )
		عودة  msg . قناة . sendEmbed (embedqu)؛
	} آخر  إذا (القيادة ===  ` قفة ` ) {
		إذا (serverQueue &&  serverQueue . اللعب ) {
			serverQueue . لعب  =  كاذبة .
			serverQueue . اتصال . المرسل . وقفة ()
			عودة  msg . قناة . أرسل ( " موافق ، متوقف مؤقتًا " ) ؛
		}
		عودة  msg . قناة . أرسل ( " ليس هناك قائمة انتظار " ! ) ؛
	} آخر في  حالة (الأمر ===  " استئناف " ) {

		إذا (serverQueue &&  ! serverQueue . اللعب ) {
			serverQueue . لعب  =  صحيح .
			serverQueue . اتصال . المرسل . استئناف () ؛
            عودة  msg . قناة . أرسل ( " طيب ، استأنف! " ) ؛
            
		}
		عودة  msg . قناة . أرسل ( " قائمة الانتظار فارغة! " ) ؛
	}

	العودة  غير معروف .
})؛

async  function  handleVideo ( video ، msg ، voiceChannel ، playlist  =  false ) {
	const  serverQueue  =  قائمة الانتظار . get ( msg . guild . id )؛
	وحدة التحكم . سجل (فيديو) ؛
	

	CONST  أغنية  = {
		id :  الفيديو . معرف ،
		العنوان :  Util . escapeMarkdown ( الفيديو . العنوان ) ،
		url :  ` https://www.youtube.com/watch؟v= $ { video . معرف } `
	}؛
	إذا ( ! serverQueue) {
		const  queueConstruct  = {
			textChannel :  msg . قناة ،
			قناة الصوت : قناة VoiceChannel ،
			اتصال :  فارغة ،
			الأغاني : [] ،
			وحدة التخزين :  5 ،
			اللعب :  صحيح
		}؛
		قائمة الانتظار . set ( msg . guild . id ، queueConstruct)؛

		queueConstruct . الأغاني . دفع (أغنية) ؛

		حاول {
			var connection = في  انتظار  قناة VoiceChannel . انضمام () ؛
			queueConstruct . اتصال  = اتصال
			play ( msg . guild ، queueConstruct . songs [ 0 ])؛
		} catch (خطأ) {
			وحدة التحكم . خطأ ( ` لم أتمكن من الانضمام إلى قناة صوت: $ { خطأ } ! ` )؛
			قائمة الانتظار . delete ( msg . guild . id )؛
			عودة  msg . قناة . send ( ` لا يمكن الانضمام إلى هذه القناة: $ { error } ! ` )؛
		}
	} آخر {
		serverQueue . الأغاني . دفع (أغنية) ؛
		وحدة التحكم . log ( serverQueue . songs )؛
		إذا كانت (قائمة التشغيل) تُرجع  غير محددة ؛
		آخر  يعود  رسالة . قناة . أرسل ( ` ** $ { song . title } ** ، فقط أضيف إلى قائمة الانتظار! ` ) ؛
	} 
	العودة  غير معروف .
}

وظيفة  اللعب ( النقابة ، الأغنية ) {
	const  serverQueue  =  قائمة الانتظار . الحصول على ( النقابة . معرف ) ؛

	إذا ( ! أغنية) {
		serverQueue . قناة الصوت . إجازة () ؛
		قائمة الانتظار . delete ( guild . id )؛
		العودة .
	}
	وحدة التحكم . log ( serverQueue . songs )؛

	CONST  المرسل  =  serverQueue . اتصال . playStream ( ytdl ( أغنية . url ))
		. في ( " النهاية " ، السبب  => {
			إذا كان (reason = ==  " دفق لا يولد بسرعة كافية. " ) وحدة التحكم . log ( " Song ended. " )؛
			آخر  وحدة التحكم . سجل (السبب) ؛
			serverQueue . الأغاني . shift ()؛
			play (guild، serverQueue . songs [ 0 ])؛
		})
		. على ( ' خطأ ' ، خطأ  =>  وحدة التحكم . خطأ (خطأ)) ؛
	المرسل . setVolumeLogarithmic ( serverQueue . volume  /  5 )؛

	serverQueue . textChannel . send ( ` ** $ { song . title } **، is playing now! ` )؛
}


العميل . على ( ' message ' ، message  => {
    if ( message . content  ===  ' help ' ) {
        دعونا helpEmbed =  جديد  Discord.RichEmbed ()
        . setTitle ( ' ** أوامر الميوزك ... ** ' )
        . setDescription ( ' ** برفكس البوت (!) ** ' )
        . addField ( ' play ' ، ' لتشغيل اغنية ' )
        . addField ( ' join ' ، ' دخول رومك الصوتي ' )
        . addField ( ' disconnect ' ، ' خروج من رومك الصوتي ' )
        . addField ( ' skip ' ، ' تخطي الأغنية ' )
        . addField ( ' pause ' ، ' ايقاف الاغنية مؤقتا ' )
        . addField ( ' resume ' ، ' تكملة الاغنية ' )
        . addField ( ' queue ' ، ' اظهار قائمة التشغيل ' )
        . addField ( ' np ' ، ' اظهار الاغنية اللي انت مشغلها حاليا ' )
        . setFooter ( ' (general_commands) لا يظهر الاوامر العامة ' )
      رسالة . قناة . أرسل (helpEmbed) ؛
    }
})؛

العميل . على ( ' message ' ، message  => {
    if ( message . content  ===  ' general_commands ' ) {
        دعونا helpEmbed =  جديد  Discord.RichEmbed ()
        . setTitle ( ' ** أوامر عامة ... ** ' )
        . addField ( ' avatar ' ، " افاتار الشخص المطلوب " )
        . addField ( ' gif ' ، ' البحث عن جيف انت مطلوبه ' )
        . addField ( ' ping ' ، ' معرفة ping البوت ' )
        . setFooter ( ' المزيد ان شاء الله! ' )
      رسالة . قناة . أرسل (helpEmbed) ؛
    }
})؛

العميل . login ( process . env . BOT_TOKEN )؛
