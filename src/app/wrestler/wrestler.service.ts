import { Injectable } from '@angular/core';
import { Card } from '../card/card';

@Injectable()
export class WrestlerService {

  getCards(): Card[] {
    let wrestlers: Card[] = [];

    wrestlers.push({
      title: 'The Ultimate Warrior',
      image: 'ultimatewarrior.jpg',
      text: `
        Warrior was an American professional wrestler, who most famously wrestled under the ring name The Ultimate Warrior for the World Wrestling Federation (WWF, now WWE) from 1987 to 1991 and again in 1992 and 1996. During his 1998 stint in World Championship Wrestling (WCW), he was known as The Warrior. Before WWF, he was known in World Class Championship Wrestling (WCCW) as Dingo Warrior.<br><br>
        While in the WWF, Warrior became a two-time WWF Intercontinental Heavyweight Champion and won the WWF World Heavyweight Championship once when he pinned Hulk Hogan in the main event at WrestleMania VI in Toronto, making him the first wrestler to hold both titles concurrently. He retired from professional wrestling in 1998 and embarked on a public speaking career, but wrestled one final match in Spain in 2008.<br><br>
        Warrior died on April 8, 2014, at the age of 54 in Scottsdale, Arizona. Over the preceding three days, he had been inducted into the WWE Hall of Fame, appeared at WrestleMania XXX and made his final public appearance on Raw, returning to the promotion after an acrimonious separation since 1996.
      `,
      properties: {
        name: 'James Brian Hellwig',
        born: 'June 16, 1959',
        died: 'April 8, 2014',
        height: '6 ft 2 in (1.88 m)',
        weight: '280 lb (130 kg)'
      },
    }, {
      title: 'Hulk Hogan',
      image: 'hulkhogan.jpg',
      text: `
        Terry Gene Bollea, better known by his ring name Hulk Hogan, is an American retired professional wrestler, actor, television personality, entrepreneur and musician.<br><br>
        Hogan is regarded by many as the greatest professional wrestler of all time. According to IGN, he is "the most recognized wrestling star worldwide and the most popular wrestler of the 1980s". Hogan enjoyed considerable mainstream popularity between 1984 and 1993 as a face in the World Wrestling Federation (WWF, now WWE), which continued for the remainder of the 1990s in World Championship Wrestling (WCW), where he turned heel in 1996 and performed as the New World Order (nWo) leader "Hollywood" Hulk Hogan.<br><br>
        A regular pay-per-view main eventer and box office draw in both organizations, Hogan headlined the premier annual events of the WWF and WCW, WrestleMania and Starrcade, multiple times; against Sting, he closed the most profitable WCW pay-per-view ever at the 1997 edition of Starrcade. Aside from those promotions, he has notably performed for the American Wrestling Association (AWA), New Japan Pro Wrestling (NJPW) and Total Nonstop Action Wrestling (TNA). He is a twelve-time world champion: a six-time WWF World Heavyweight Champion/WWF Champion (with his last reign being as Undisputed WWF/WWE Champion) and a six-time WCW World Heavyweight Champion. He was the first wrestler to win consecutive Royal Rumbles, in 1990 and 1991, and was inducted into the WWE Hall of Fame in 2005, by Sylvester Stallone.<br><br>
        During and after wrestling, Hogan had an extensive acting career, beginning with his 1982 antagonist role in Rocky III. He has starred in several movies (including No Holds Barred, Suburban Commando and Mr. Nanny) and three television shows (Thunder in Paradise, Hogan Knows Best and China, IL), as well as in Right Guard commercials and the video game, Hulk Hogan's Main Event. He was also the frontman for The Wrestling Boot Band, whose sole record, Hulk Rules, reached #12 on the Billboard Top Kid Audio chart in 1995.
      `,
      properties: {
        name: 'Terry Gene Bollea',
        born: 'August 11, 1953',
        height: '6 ft 7 in (2.01 m)',
        weight: '302 lb (137 kg)'
      }
    }, {
      title: 'Bret "The Hitman" Hart',
      image: 'bretthehitmanhart.jpg',
      text: `
        Bret Sergeant Hart, better known by the ring name Bret "The Hitman" Hart, is a Canadian-American retired professional wrestler, retired amateur wrestler, writer and actor. A member of the Hart wrestling family and a second-generation wrestler, he has an amateur wrestling background, wrestling at Ernest Manning High School and Mount Royal College. A major international draw within professional wrestling, he has been credited with changing the perception of mainstream North-American professional wrestling in the early 1990s by bringing technical in-ring performance to the fore. Hart is widely regarded as one of the greatest professional wrestlers of all time; Sky Sports noted that his legacy is that of "one of, if not the greatest, to have ever graced the squared circle".<br><br>
        Hart joined his father Stu Hart's promotion Stampede Wrestling in 1976, and made his in-ring debut in 1978. He gained championship success throughout the 1980s and 1990s in the World Wrestling Federation (WWF, now WWE), where he helmed The Hart Foundation faction. He left for World Championship Wrestling (WCW) following the controversial "Montreal Screwjob" in November 1997, where he remained until October 2000. Having been inactive from in-ring competition since January 2000, owing to a December 1999 concussion, he officially retired in October 2000, shortly after his departure from the company. He returned to sporadic in-ring competition from 2010–2011 with WWE, where he won his final championship, headlined the 2010 SummerSlam event, and served as the general manager of Raw. Throughout his career, Hart headlined WrestleMania IX, X, and XII, and participated in the main event of the Starrcade 1997 and 1999 – as a special enforcer and referee in the former.<br><br>
        Hart has held championships in five decades from the 1970s to the 2010s, with a total of 32 held throughout his career, and 17 held between the WWF/WWE and WCW. Among other accolades, he is a five-time WWF World Heavyweight Champion and a two-time WCW World Heavyweight Champion. Hart has most combined days as WWF World Heavyweight Champion during the 1990s (654), and was the first WCW World Heavyweight Champion born outside the United States. He is the second WWF Triple Crown Champion and fifth (with Goldberg) WCW Triple Crown Champion, and the first man to win both the WWF and WCW Triple Crown Championships. Hart is also the 1994 Royal Rumble match winner (with Lex Luger), and the only two-time King of the Ring, winning the 1991 tournament and the first King of the Ring pay-per-view in 1993. Stone Cold Steve Austin, with whom Hart headlined multiple pay-per-view events as part of an acclaimed rivalry from 1996 to 1997, inducted him into the WWE Hall of Fame in 2006.<br><br>
        Outside of wrestling Hart has appeared in numerous films and television shows such as The Simpsons as well as featuring in several documentaries, both about himself specifically and others about the wrestling industry in general. Hart also helped found and lend his name to the major junior ice hockey team the Calgary Hitmen and has written two biographies as well has having a weekly column for the Calgary Sun for over a decade.
      `,
      properties: {
        name: 'Bret Sergeant Hart',
        born: 'July 2, 1957',
        height: '6 ft 0 in (1.83 m)',
        weight: '235 lb (107 kg)'
      }
    }, {
      title: 'Razor Ramon',
      image: 'razorramon.jpg',
      text: `
        Scott Oliver Hall is an American semi-retired professional wrestler, best known for his work with the World Wrestling Federation (WWF, now known as WWE) under the ring name Razor Ramon and with World Championship Wrestling (WCW) under his real name.<br><br>
        Beginning with his time in the American Wrestling Association (AWA), Hall maintained a perennially high profile as a wrestler, as he became a four time WWF Intercontinental Champion (a record from 1995–1999), a two-time WCW United States Heavyweight Champion, a one-time WCW World Television Champion, and a nine-time world tag team champion (seven times in WCW, once in TNA, and once in the AWA). In addition, Hall won the WWC Universal Heavyweight Championship and the USWA Unified World Heavyweight Championship. He is also notable for being a founding member of the New World Order (nWo). On April 5, 2014, Hall (as Razor Ramon) was inducted into the WWE Hall of Fame.
      `,
      properties: {
        name: 'Scott Oliver Hall',
        born: 'October 20, 1958',
        height: '6 ft 7 in (2.01 m)',
        weight: '287 lb (130 kg)'
      }
    }, {
      title: 'The Undertaker',
      image: 'theundertaker.jpg',
      text: `
        Mark William Calaway, better known by the ring name The Undertaker, is an American professional wrestler signed to WWE.<br><br>
        Calaway began his wrestling career with World Class Championship Wrestling (WCCW) in 1984. After wrestling for World Championship Wrestling (WCW) as "Mean Mark" Callous from 1989 to 1990, he signed with the then World Wrestling Federation (WWF, now WWE) in 1990, making him the company's longest tenured in-ring performer. According to MTV News, Calaway is "regarded as one of the greatest professional wrestlers of all time."<br><br>
        As The Undertaker, Calaway's gimmick was a horror-themed, macabre entity who employed scare tactics and held links to the supernatural. The character was reinvented as a biker during a period in the early 2000s before returning to a refined version of his previous gimmick in 2004. The Undertaker is the storyline older half-brother of fellow WWE wrestler Kane, with whom he has alternately feuded and teamed with as The Brothers of Destruction. The Undertaker has been involved in various pivotal storylines and matches within WWE history and has been referred to as the "soul of the WWE".<br><br>
        The Undertaker was known for The Streak, an unprecedented run of 21 straight victories at WWE's leading pay-per-view, WrestleMania (including main event matches at WrestleMania 13, WrestleMania XXIV, WrestleMania XXVI, and WrestleMania 33); he sustained his first loss at WrestleMania XXX to Brock Lesnar. Prior to his WWF/WWE career, he also held the USWA Unified World Heavyweight Championship once and since unseating Hulk Hogan as WWF Champion in 1991, he has won the WWF/WWE Championship four times and the WWE's World Heavyweight Championship three times. He also won the 2007 Royal Rumble.
      `,
      properties: {
        name: 'Mark William Calaway',
        born: 'March 24, 1965',
        height: '6 ft 10 in (2.08 m)',
        weight: '309 lb (140 kg)'
      }    }, {
      title: 'Sgt. Slaughter',
      image: 'sgtslaughter.jpg',
      text: `
        Robert Remus, better known by his ring name of Sgt. Slaughter, is an American retired professional wrestler currently signed with the WWE in the ambassador program.<br><br>
        From the late 1970s to the early 1990s, he had success in the National Wrestling Alliance, American Wrestling Association, and the World Wrestling Federation. Slaughter's greatest achievement came with him becoming world champion by winning the WWF World Heavyweight Championship in 1991 as well as headlining WrestleMania VII. Slaughter also captured the NWA United States Heavyweight Championship twice. As Sgt. Slaughter, Remus became known for his dark sunglasses, his large hat, and his Vietnam War-era military fatigues. In the 1980s, an alternate version of the Sgt. Slaughter character was incorporated into the G.I. Joe: A Real American Hero toy line as well as its animated series and comic books.<br><br>
        Though Remus was born in Detroit, Michigan, he was raised in Minneapolis, Minnesota, where he attended Eden Prairie High School in Eden Prairie, where he wrestled and played football. Remus legitimately enlisted in the United States Marine Corps, and was a drill instructor at Parris Island, South Carolina, prior to his professional wrestling career.
      `,
      properties: {
        name: 'Robert Remus',
        born: 'August 27, 1948',
        height: '6 ft 4 in (1.93 m)',
        weight: '310 lb (141 kg)'
      }
    }, {
      title: 'Sting',
      image: 'sting.jpg',
      text: `
        Steve Borden, better known by the ring name Sting, is an American retired professional wrestler, actor, author and former bodybuilder. He is currently signed with WWE under a Legends contract.<br><br>
        Sting is known for his time spent as the public face of two major professional wrestling promotions: the now-defunct World Championship Wrestling (WCW), which displaced the World Wrestling Federation (WWF, now WWE) as the leading professional wrestling organization in the United States from 1995 to 1998, and Total Nonstop Action Wrestling (TNA). Borden is regarded as one of the greatest professional wrestlers of all time, having cultivated a legacy over a career spanning more than three decades in which he held 15 world championships.<br><br>
        Sting's 14-year tenure with WCW and its predecessor, Jim Crockett Promotions (JCP), began in 1987. Dubbed "The Franchise of WCW", he held a total of 15 championships in the promotion – including the WCW World Heavyweight Championship on six occasions, the WCW International World Heavyweight Championship on two occasions and the NWA World Heavyweight Championship on one occasion – and made more pay-per-view (PPV) appearances for the company than any other wrestler. Sting has been described as the WCW counterpart to the WWF's Hulk Hogan. Against Hogan, Sting headlined the highest-grossing PPV event in WCW history at Starrcade in December 1997. Upon the acquisition of WCW by the WWF in March 2001, Sting and his long-term rival Ric Flair were chosen to perform in the main event of the final episode of Nitro.<br><br>
        Following the expiration of his contract with WCW's parent company, AOL Time Warner, in March 2002, Borden held talks with the WWF, but ultimately did not join the promotion and instead toured internationally with World Wrestling All-Stars (WWA) – winning the WWA World Heavyweight Championship – before joining the then-upstart TNA in 2003. Over the following 11 years, he won the NWA World Heavyweight Championship on one further occasion and the TNA World Heavyweight Championship four times, as well as being the inaugural inductee into the TNA Hall of Fame in 2012. He is the only man to hold the NWA, WCW (WWA and WCW international additionally) and TNA world championships in a career. Previously described by WWE as the greatest wrestler never to have performed for that promotion, Sting finally joined the company in 2014, making his first appearance at Survivor Series and having his debut match at WrestleMania 31 the following year. His last ever bout at Night of Champions in September 2015, marked his sole WWE pay-per-view main event and WWE World Heavyweight Championship contest for the organization. Sting headlined the WWE Hall of Fame class of 2016 on April 2, where he announced his retirement. His induction renders him the first performer to be inducted into both the WWE and TNA Hall of Fame, as well as the second man to be inducted while an active WWE wrestler after Ric Flair.<br><br>
        Sting held 25 total championships throughout his career, including 21 between WCW and TNA. Readers of Pro Wrestling Illustrated named him "Most Popular Wrestler of the Year" on four occasions, a record he shares with John Cena. In 2016, Sting was inducted into the Wrestling Observer Newsletter Hall of Fame. Slam! Sports wrote that he holds "a lofty level of prestige that few will ever touch".
      `,
      properties: {
        name: 'Steve Borden',
        born: 'March 20, 1959',
        height: '6 ft 2 in (1.88 m)',
        weight: '250 lb (110 kg)'
      }
    }, {
      title: 'Mr. Perfect',
      image: 'mrperfect.jpg',
      text: `
        Curtis Michael Hennig was an American professional wrestler, manager, and color commentator who performed under his real name for the American Wrestling Association (AWA), the World Wrestling Federation (now WWE), World Championship Wrestling (WCW), and Total Nonstop Action Wrestling (TNA). In the WWF, he found his greatest success as Mr. Perfect, a nickname introduced in his second run with the company which gradually became his official ring name. Hennig used the same ring name in his third and final run. However, his real name was widely acknowledged. He is the son of wrestler Larry "The Axe" Hennig, and father of current WWE wrestler Curtis Axel.<br><br>
        Hennig was a four-time world champion, having held the AWA World Heavyweight Championship once for 373 days (the seventh-longest reign in history), the WWC Universal Heavyweight Championship once, and the i-Generation World Heavyweight Championship twice (with the i-Generation title being contested only in Australia). A two-time WWF Intercontinental Heavyweight Champion, Hennig has been named by WWE as one of the top five Intercontinental Champions of all time and a man who brought a new level of credibility to the title; he was the longest-reigning champion of the 1990s. In addition to winning multiple championships in WCW during the late 1990s, he was a member of the New World Order and leader of stable and country music group, The West Texas Rednecks, who recorded the popular tongue-in-cheek song, "Rap is Crap". Hennig returned to the WWF for a brief period in 2002, being one of the last three men remaining at the Royal Rumble. He later challenged for the NWA World Heavyweight Championship in TNA, prior to his death on February 10, 2003.<br><br>
        Both WWF and WCW have recognized Hennig as one of the greatest professional wrestlers of all time, with the former crediting him for raising the accepted standard of technical wrestling. He was inducted into the WWE Hall of Fame in 2007 by former Major League Baseball player and longtime friend Wade Boggs. Former WWF rival Hulk Hogan remarked, "Everybody would check their egos at the door when they came to a building that Curt Hennig was in, because you couldn't out-work him, you couldn't outshine him and you couldn't out-perform him. He was the best of the best."
      `,
      properties: {
        name: 'Curtis Michael Hennig',
        born: 'March 20, 1959',
        died: 'February 10, 2003',
        height: '6 ft 3 in (1.91 m)',
        weight: '257 lb (117 kg)'
      }
    }, {
      title: 'British Bulldog',
      image: 'britishbulldog.jpg',
      text: `
        David "Davey Boy" Smith was a British professional wrestler. Born in Golborne, Lancashire, Smith is best known for his appearances in the United States with the World Wrestling Federation under his own name and under the ring name The British Bulldog.<br><br>
        He was trained by Ted Betley in Winwick, England before relocating to Calgary, Alberta, Canada to further his training under Stu Hart. While training with Hart, Smith met Stu and Helen Hart's youngest daughter Diana, whom he married in 1984. One of their two children, Harry, is also a professional wrestler.<br><br>
        Smith won titles within the WWF in three decades, from the 1980s to the 2000s. He headlined multiple pay-per-view events in the WWF and WCW, in which he challenged for the WWF and WCW world heavyweight championships, and defeated Bret Hart for the WWF Intercontinental Championship in the main event of SummerSlam 1992. He was the inaugural WWF European Champion and holds the records for longest single reign (206 days) and total days as champion (253); he also held the title on the sole occasion where a match for that championship headlined a pay-per-view event, at One Night Only in 1997. Prior to finding singles success, Smith achieved stardom as one half of The British Bulldogs tag team, alongside his cousin Dynamite Kid.
      `,
      properties: {
        name: 'Davey Boy Smith',
        born: '27 November 1962',
        died: '18 May 2002',
        height: '5 ft 11 in (1.80 m)',
        weight: '260 lb (120 kg)'
      }
    }, {
      title: 'Lex Luger',
      image: 'lexluger.jpg',
      text: `
        Lawrence Wendell Pfohl better known by the ring name Lex Luger, is an American retired professional wrestler, television producer and football player currently working with WWE on their wellness policy. He is best known for his work with Jim Crockett Promotions, World Championship Wrestling (WCW), and the World Wrestling Federation (WWF, now WWE).<br><br>
        Luger is a two-time WCW World Heavyweight Champion and one-time WWA World Heavyweight Champion. He is also a five-time NWA/WCW United States Heavyweight Champion who holds the records for consecutive days and total days as champion. Although he never won a championship in the WWF, he challenged for every title in the organization (including WWF World Heavyweight Championship matches at SummerSlam in 1993 and WrestleMania X in 1994) and was the 1994 Royal Rumble co-winner with Bret Hart. Pro Wrestling Illustrated readers voted Luger the Most Popular Wrestler of the Year in 1993.
      `,
      properties: {
        name: 'Lawrence Wendell Pfohl',
        born: 'June 2, 1958',
        height: '6 ft 6 in (1.98 m)',
        weight: '275 lb (125 kg)'
      }
    }, {
      title: 'Macho Man',
      image: 'machoman.jpg',
      text: `
        Randy Mario Poffo, better known by his ring name "Macho Man" Randy Savage, was an American professional wrestler and color commentator best known for his time in the World Wrestling Federation (WWF, now WWE) and later World Championship Wrestling (WCW).<br><br>
        Savage is widely regarded as one of the greatest professional wrestlers in history; a number of peers have ranked Savage among the industry's top performers of all time. He was recognizable by wrestling fans for his distinctively deep and raspy voice, his flamboyant ring attire, intensity exhibited in and out of the ring, using "Pomp and Circumstance" as his entrance music and his signature catch phrase, "Oooh yeah!". For most of his tenures in the WWF and WCW, Savage was managed by his real-life wife "Miss Elizabeth" Hulette.<br><br>
        He won 29 titles during a 32-year career, including the WWF World Heavyweight Championship twice and the WCW World Heavyweight Championship four times. A one-time WWF Intercontinental Heavyweight Champion, Savage was named by WWE as the greatest Intercontinental Champion of all time and was credited for bringing "a higher level of credibility to the title through his amazing in-ring performances".<br><br>
        Aside from championships, he was the 1987 WWF King of the Ring and the 1995 WCW World War 3 winner. A major pay-per-view attraction in the 1980s and 1990s, Savage headlined WrestleManias IV, V and VIII (being part of a double main event at the last of those presentations), as well as four of the first five SummerSlam shows, the 1995 Starrcade, and many other events. At the peak of his popularity, he held similar drawing power to that of Hulk Hogan. He was posthumously inducted into the WWE Hall of Fame in 2015.
      `,
      properties: {
        name: '	Randy Mario Poffo',
        born: 'November 15, 1952',
        died: 'May 20, 2011',
        height: '6 ft 2 in (1.88 m)',
        weight: '237 lb (108 kg)'
      }
    }, {
      title: 'Bam Bam Bigelow',
      image: 'bambambigelow.jpg',
      text: `
        Scott Charles Bigelow was an American professional wrestler, better known by the ring name Bam Bam Bigelow. Frame and the distinctive flame tattoo that spanned most of his bald head, Bigelow was hailed by former employer WWE in 2013 as "the most natural, agile and physically remarkable big man of the past quarter century."<br><br>
        Bigelow is best known for his appearances with the World Wrestling Federation, Extreme Championship Wrestling, and World Championship Wrestling between 1987 and 2001. Over the course of his career, he held championships including the ECW World Heavyweight Championship and WCW World Tag Team Championship, and headlined multiple events including the first Survivor Series in 1987, the first King of the Ring pay-per-view in 1993, WrestleMania XI, November to Remember 1997 and November to Remember 1998.
      `,
      properties: {
        name: 'Scott Charles Bigelow',
        born: 'September 1, 1961',
        died: 'January 19, 2007',
        height: '6 ft 2 in (1.88 m)',
        weight: '325 lb (147 kg)'
      }
    }, {
      title: 'Viscera',
      image: 'viscera.jpg',
      text: `
        Nelson Frazier Jr. was an American professional wrestler, best known for his appearances with the World Wrestling Federation/World Wrestling Entertainment (WWF/WWE) in the 1990s and 2000s under the ring names Mabel, Viscera, and Big Daddy V. A former WWF World Tag Team Champion and WWF Hardcore Champion, he won the 1995 King of the Ring tournament and wrestled in the main event of that year's SummerSlam.
      `,
      properties: {
        name: 'Nelson Frazier Jr.',
        born: 'February 14, 1971',
        died: 'February 18, 2014',
        height: '6 ft 9 in (2.06 m)',
        weight: '487 lb (221 kg)'
      }
    }, {
      title: 'Typhoon',
      image: 'typhoon.jpg',
      text: `
        Fred Alex Ottman is an American retired professional wrestler. He is best known for his appearances with the World Wrestling Federation from 1989 to 1993 under the ring names Tugboat and Typhoon. Championships held by Ottman include the WWF Tag Team Championship.
      `,
      properties: {
        name: 'Fred Alex Ottman',
        born: 'August 10, 1956',
        height: '6 ft 3 in (1.91 m)',
        weight: '383 lb (174 kg)'
      }
    }, {
      title: 'Earthquake',
      image: 'earthquake.jpg',
      text: `
      John Anthony Tenta Jr. was a Canadian professional wrestler and sumōtori best known for his work in the World Wrestling Federation as Earthquake. After a promising start to his sumo career, using the name Kototenzan, Tenta switched to professional wrestling and became a high-profile star for the WWF, feuding with Hulk Hogan and winning the WWF Tag Team Championship with partner, and personal friend, Typhoon. His professional wrestling career also encompassed runs in World Championship Wrestling, where he was known as Avalanche and The Shark, All Japan Pro Wrestling and a return to WWF as Golga. Tenta died in 2006 after a long battle with bladder cancer.
    `,
    properties: {
      name: 'John Anthony Tenta Jr.',
      born: 'June 22, 1963',
      died: 'June 7, 2006',
      height: '6 ft 7 in (2.01 m)',
      weight: '468 lb (212 kg)'
    }
    });

    return wrestlers;
  }

}
