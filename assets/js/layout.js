$(function () {
    var ids;
    $('select.select2').select2();
    // نام شهر ها به انگلیسی 
    const obj = {
        states: {
            "ME": {
                id: 1,
                name: "Maine",
                detail: "Maine, the northeasternmost U.S. state," +
                    "is known for its rocky coastline, maritime history "
                    + "and nature areas like the granite and spruce islands of " +
                    "Acadia National Park. Moose are plentiful in Baxter State Park," +
                    "home to Mt. Katahdin, endpoint of the Appalachian Trail. " +
                    "Lighthouses such as the candy-striped beacon at West Quoddy Head,"
                    + "dot the coast, as do lobster shacks and sandy beaches like Ogunquit and Old",
                abr: "ME"
            },
            "HI": {
                id: 2,
                name: "Hawaii",
                detail: "Hawaii is a state in the Western United States, about 2,000 miles from the U.S. mainland in the Pacific Ocean. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics",
                abr: "HI"
            },
            "AK": {
                id: 3,
                name: "Alaska",
                detail: "Alaska is a U.S. state on the northwest extremity of North America. A semi-exclave of the U.S., it borders British Columbia and the Yukon in Canada to the east, and it shares a western maritime border in the Bering Strait with the Russian Federation's Chukotka Autonomous Okrug",
                abr: "AK"
            },
            "FL": {
                id: 4,
                name: "Florida",
                detail: "Florida is the southeasternmost U.S. state, with the Atlantic on one side and the Gulf of Mexico on the other. It has hundreds of miles of beaches. The city of Miami is known for its Latin-American cultural influences and notable arts scene, as well as its nightlife, especially in upscale South Beach. Orlando is famed for theme parks, including Walt Disney",
                abr: "FL"
            },
            "SC": {
                id: 5,
                name: "South Carolina",
                detail: "South Carolina is a southeastern U.S. state known for its shoreline of subtropical beaches and marshlike sea islands. Coastal Charleston is a historic city, defined by pastel-colored houses, Old South plantations and Fort Sumter, where the Civil War’s opening shots were fired. To the north is the Grand Strand, a roughly 60-mile stretch of beachfront known for golf courses and the vacation town Myrtle Beach",
                abr: "SC"
            },
            "GA": {
                id: 6,
                name: "Georgia",
                detail: "Georgia is a southeastern U.S. state whose terrain spans coastal beaches, farmland and mountains. Capital city Atlanta is home of the Georgia Aquarium and the Martin Luther King Jr. National Historic Site, dedicated to the African-American leader’s life and times. The city of Savannah is famed for its 18th- and 19th-century architecture and leafy public squares. Augusta hosts the Masters golf tournament.",
                abr: "GA"
            },
            "AL": {
                id: 7,
                name: "Alabama",
                detail: "Alabama is a southeastern U.S. state that’s home to significant landmarks from the American Civil Rights Movement. The city of Birmingham's 16th Street Baptist Church, now a museum, was a protest headquarters in the 1960s. Martin Luther King, Jr.'s church and the Rosa Parks Museum, dedicated to the activist, can be found in the capital of Montgomery.",
                abr: "AL"
            },
            "NC": {
                id: 8,
                name: "North Carolina",
                detail: "North Carolina is a state in the Southeastern region of the United States. The state is the 28th largest and 9th-most populous of the United States. It is bordered by Virginia to the north, the Atlantic Ocean to the east, Georgia and South Carolina to the south, and Tennessee to the west",
                abr: "AL"
            }
            ,
            "TN": {
                id: 9,
                name: "Tennessee",
                detail: "Tennessee is a landlocked state in the U.S. South. Its capital, centrally located Nashville, is the heart of the country-music scene, with the long-running Grand Ole Opry, the Country Music Hall of Fame and Museum and a legendary stretch of honky-tonks and dance halls. Memphis, in the far southwest, is the home of Elvis Presley’s Graceland, rock-and-roll pioneering Sun Studio and the blues clubs of Beale Street.",
                abr: "TN"
            }
            ,
            "RI": {
                id: 10,
                name: "Rhode Island",
                detail: "Rhode Island, a U.S. state in New England, is known for sandy shores and seaside Colonial towns. It's home to several large cities, including Newport, which is famed for sailing and Gilded Age mansions, such as The Breakers. Providence, its capital, is home to Brown University, green Roger Williams Park, landscaped Waterplace Park and Riverwalk, with the famed WaterFire art installation",
                abr: "TN"
            }
            ,
            "CT": {
                id: 11,
                name: "Connecticut",
                detail: "Connecticut is a U.S. state in southern New England that has a mix of coastal cities and rural areas dotted with small towns. Mystic is famed for its Seaport museum filled with centuries-old ships, and the beluga whale exhibits at Mystic Aquarium. On Long Island Sound, the city of New Haven is known as the home of Yale University and its acclaimed Peabody Museum of Natural History",
                abr: "CT"
            }
            ,
            "MA": {
                id: 12,
                name: "Massachusetts",
                detail: "Massachusetts, officially the Commonwealth of Massachusetts, is the most populous state in the New England region of the Northeastern United States, exceeding 7 million residents at the 2020 United States census, its highest decennial count ever.",
                abr: "MA"
            }
            ,
            "NH": {
                id: 13,
                name: "New Hampshire",
                detail: "New Hampshire, a U.S. state in New England, is defined by its quaint towns and large expanses of wilderness. In the north, White Mountain National Forest is known for winter sports areas and Mt. Washington, the region’s highest peak, with a cog railway to its summit. Also in the White Mountains are moose, black bears and part of the Appalachian Trail",
                abr: "NH"
            }
            ,
            "VT": {
                id: 14,
                name: "Vermont",
                detail: "Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes.",
                abr: "VT"
            }
            ,
            "NY": {
                id: 15,
                name: "New York",
                detail: "New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park. The Brooklyn Bridge connects Manhattan with the borough of Brooklyn. The iconic Statue of Liberty stands in New York Harbor. To the east, Long Island has beaches, the Montauk Lighthouse, the ritzy Hamptons and Fire Island",
                abr: "NY"
            }
            ,
            "NJ": {
                id: 16,
                name: "New Jersey",
                detail: "New Jersey is a northeastern U.S. state with some 130 miles of Atlantic coast. Jersey City, across the Hudson River from Lower Manhattan, is the site of Liberty State Park, where ferries embark for nearby Ellis Island, with its historic Immigration Museum, and the iconic Statue of Liberty. The Jersey Shore includes notable resort towns like historic Asbury Park and Cape May, with its preserved Victorian buildings.",
                abr: "NJ"
            }
            ,
            "PA": {
                id: 17,
                name: "Pennsylvania",
                detail: "Pennsylvania, officially the Commonwealth of Pennsylvania, is a state spanning the Mid-Atlantic, Northeastern, Appalachian, and Great Lakes regions of the United States",
                abr: "PA"
            }
            ,
            "DE": {
                id: 18,
                name: "Delaware",
                detail: "Delaware, a small Mid-Atlantic U.S. state, sits on a peninsula marked by dune-backed beaches bordering the Atlantic Ocean, Delaware River and Delaware Bay. In Dover, the capital, First State Heritage Park encompasses 18th-century Colonial landmarks like the Georgian-style Old State House. The city of Wilmington is known for the Riverfront, a waterside district of parks, boutiques and restaurants.",
                abr: "DE"
            }
            ,
            "MD": {
                id: 19,
                name: "Maryland",
                detail: "Maryland is a Mid-Atlantic state that's defined by its abundant waterways and coastlines on the Chesapeake Bay and Atlantic Ocean. Its largest city, Baltimore, has a long history as a major seaport. Fort McHenry, birthplace of the U.S. national anthem, sits at the mouth of Baltimore’s Inner Harbor, home to the National Aquarium and Maryland Science Center.",
                abr: "MD"
            }
            ,
            "KY": {
                id: 20,
                name: "Kentucky",
                detail: "Kentucky is a southeastern state bounded by the Ohio River in the north and the Appalachian Mountains in the east, with Frankfort the state capital. The state's largest city, Louisville, is home to the Kentucky Derby, the renowned horse race held at Churchill Downs on the first Saturday in May. The race is preceded by a 2-week festival and celebrated in the Kentucky Derby Museum year-round.",
                abr: "KY"
            }
            ,
            "OH": {
                id: 21,
                name: "Ohio",
                detail: "Ohio is a state in the Midwestern United States. Of the fifty U.S. states, it is the 34th-largest by area. With a population of nearly 11.8 million, Ohio is the seventh-most populous and tenth-most densely populated state",
                abr: "OH"
            }
            ,
            "MI": {
                id: 22,
                name: "Michigan",
                detail: "Wyoming is a state in the Mountain West subregion of the Western United States. It is bordered by Montana to the north and northwest, South Dakota and Nebraska to the east, Idaho to the west, Utah to the southwest, and Colorado to the south",
                abr: "MI"
            }
            ,
            "WY": {
                id: 23,
                name: "Wyoming",
                detail: "Wyoming is a state in the Mountain West subregion of the Western United States. It is bordered by Montana to the north and northwest, South Dakota and Nebraska to the east, Idaho to the west, Utah to the southwest, and Colorado to the south",
                abr: "WY"
            }
            ,
            "MT": {
                id: 24,
                name: "Montana",
                detail: "Montana is a western state defined by its diverse terrain ranging from the Rocky Mountains to the Great Plains. Its wide-open spaces include Glacier National Park, a vast wilderness preserve that passes into Canada. The park’s many snow-capped peaks, lakes and alpine hiking trails are showcased along its famed Going-to-the-Sun Road, stretching 50 miles",
                abr: "MT"
            }
            ,
            "ID": {
                id: 25,
                name: "Idaho",
                detail: "Idaho is a northwestern U.S. state known for mountainous landscapes, and vast swaths of protected wilderness and outdoor recreation areas. The capital, Boise, is set in the Rocky Mountain foothills and is bisected by the Boise River, which is popular for rafting and fishing. The city’s riverfront Julia Davis Park is a downtown green space containing a rose garden, museums and a zoo",
                abr: "ID"
            }
            ,
            "WA": {
                id: 26,
                name: "Washington",
                detail: "Washington, officially the State of Washington, is a state in the Pacific Northwest region of the Western United States.",
                abr: "WA"
            }
            ,
            "TX": {
                id: 27,
                name: "Texas",
                detail: "Texas is a state in the South Central region of the United States. At 268,596 square miles, and with more than 30 million residents in 2022, it is the second-largest U.S. state by both area and population",
                abr: "TX"
            }
            ,
            "CA": {
                id: 28,
                name: "California",
                detail: "California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars.",
                abr: "CA"
            }
            ,
            "AZ": {
                id: 29,
                name: "Arizona",
                detail: "Arizona, a southwestern U.S. state, is best known for the Grand Canyon, the mile-deep chasm carved by the Colorado River. Flagstaff, a ponderosa pine–covered mountain town, is a major gateway to the Grand Canyon. Other natural sites include Saguaro National Park, protecting cactus-filled Sonoran Desert landscape. Tucson is University of Arizona territory and home to the Arizona-Sonora Desert Museum",
                abr: "AZ"
            }
            ,
            "NV": {
                id: 30,
                name: "Neveda",
                detail: "Nevada is a state in the Western region of the United States. It is bordered by Oregon to the northwest, Idaho to the northeast, California to the west, Arizona to the southeast, and Utah to the east. Nevada is the 7th-most extensive, the 32nd-most populous, and the 9th-least densely populated of the U.S. states.",
                abr: "NV"
            }
            ,
            "UT": {
                id: 31,
                name: "Utah",
                detail: "Utah is a landlocked state in the Mountain West subregion of the Western United States. It is bordered to its east by Colorado, to its northeast by Wyoming, to its north by Idaho, to its south by Arizona, and to its west by Nevada. Utah also touches a corner of New Mexico in the southeast",
                abr: "UT"
            }
            ,
            "CO": {
                id: 32,
                name: "Colorado",
                detail: "Colorado, a western U.S. state, has a diverse landscape of arid desert, river canyons and snow-covered Rocky Mountains, which are partly protected by Rocky Mountain National Park. Elsewhere, Mesa Verde National Park features Ancestral Puebloan cliff dwellings. Perched a mile above sea level, Denver, Colorado’s capital and largest city, features a vibrant downtown area",
                abr: "CO"
            }
            ,
            "OR": {
                id: 33,
                name: "Oregon",
                detail: "Oregon is a state in the Pacific Northwest region of the United States. Oregon is a part of the Western United States, with the Columbia River delineating much of Oregon's northern boundary with Washington, while the Snake River delineates much of its eastern boundary with Idaho",
                abr: "OR"
            }
            ,
            "ND": {
                id: 34,
                name: "North Dakota",
                detail: "North Dakota is a midwestern U.S. state dominated by the Great Plains. Its eastern city of Fargo showcases Native American and modern art at the Plains Art Museum. The area's immigrant history is honored at the Scandinavian Heritage Association in the city of Minot. The Great Plains give way to the rugged Badlands near the border with Montana, where Theodore Roosevelt National Park spans the Little Missouri River",
                abr: "ND"
            }
            ,
            "SD": {
                id: 35,
                name: "South Dakota",
                detail: "South Dakota is an expansive, sparsely populated midwestern U.S. state where rolling prairies give way to the dramatic Black Hills National Forest. Black Hills is home to 2 historical monuments carved right into towering granite peaks: Mt. Rushmore, the iconic depiction of 4 revered U.S. presidents, and Crazy Horse Memorial, a tribute to the storied Native American tribal leader",
                abr: "SD"
            }
            ,
            "NE": {
                id: 36,
                name: "Nebraska",
                detail: "Nebraska is a midwestern U.S. state encompassing the prairies of the Great Plains, the towering dunes of the Sandhills and the panhandle’s dramatic rock formations. Lincoln, the capital and a vibrant university town, is distinguished by its soaring state capitol. The city of Omaha is home to the Durham Museum, which honors the state’s pioneering past in a converted railroad depot. ",
                abr: "NE"
            }
            ,
            "IA": {
                id: 37,
                name: "Iowa",
                detail: "Iowa, a Midwestern U.S. state, sits between the Missouri and Mississippi rivers. It’s known for its landscape of rolling plains and cornfields. Landmarks in the capital, Des Moines, include the gold-domed, 19th-century State Capitol Building, Pappajohn Sculpture Park and the Des Moines Art Center, noted for its contemporary collections. The city of Cedar Rapids' Museum of Art has paintings by native Iowan Grant Wood",
                abr: "VT"
            }
            ,
            "MS": {
                id: 38,
                name: "Mississippi",
                detail: "Mississippi is a southern U.S. state with the Mississippi River to its west, the state of Alabama to its east, and the Gulf of Mexico to the south. Its Mississippi Delta region is considered the birthplace of blues music, honored at the Delta Blues Museum in Clarksdale. Also in the region is the Vicksburg National Military Park, preserving the site of a critical Civil War battle",
                abr: "MS"
            }
            ,
            "IN": {
                id: 39,
                name: "Indiana",
                detail: "Indiana is a U.S. state in the Midwestern United States. It is the 38th-largest by area and the 17th-most populous of the 50 States. Its capital and largest city is Indianapolis. Indiana was admitted to the United States as the 19th state on December ",
                abr: "IN"
            }
            ,
            "IL": {
                id: 40,
                name: "Illinois",
                detail: "Illinois is a midwestern state bordering Indiana in the east and the Mississippi River in the west. Nicknamed " + "the Prairie State," + " it's marked by farmland, forests, rolling hills and wetlands. Chicago, one of the largest cities in the U.S, is in the northeast on the shores of Lake Michigan. It’s famous for its skyscrapers, such as sleek, 1,451-ft. Willis Tower and the neo-Gothic Tribune Tower",
                abr: "IL"
            }
            ,
            "MN": {
                id: 41,
                name: "Minnesota",
                detail: "Minnesota is a midwestern U.S. state bordering Canada and Lake Superior, the largest of the Great Lakes. The state contains more than 10,000 other lakes, including Lake Itasca, the Mississippi River’s primary source. The “Twin Cities” of Minneapolis and state capital Saint Paul are dense with cultural landmarks like the Science Museum of Minnesota and the Walker Art Center, a modern art museum",
                abr: "VT"
            }
            ,
            "WI": {
                id: 42,
                name: "Wisconsin",
                detail: "Wisconsin is a midwestern U.S. state with coastlines on 2 Great Lakes (Michigan and Superior) and an interior of forests and farms. Milwaukee, the largest city, is known for the Milwaukee Public Museum, with its numerous re-created international villages, and the Harley-Davidson Museum, displaying classic motorcycles. Several beer companies are based in Milwaukee, and many offer brewery tours",
                abr: "WI"
            }
            ,
            "MO": {
                id: 43,
                name: "Missouri",
                detail: "Missouri is a state in the Midwestern region of the United States. Ranking 21st in land area, it is bordered by eight states: Iowa to the north, Illinois, Kentucky and Tennessee to the east, Arkansas to the south and Oklahoma, Kansas and Nebraska to the west",
                abr: "MO"
            }
            ,
            "AR": {
                id: 44,
                name: "Oklahoma",
                detail: "Oklahoma is a state in the South Central region of the United States, bordered by Texas on the south and west, Kansas on the north, Missouri on the northeast, Arkansas on the east, New Mexico on the west, and Colorado on the northwest",
                abr: "AR"
            }
            ,
            "OK": {
                id: 45,
                name: "Vermont",
                detail: "Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes.",
                abr: "OK"
            }
            ,
            "LA": {
                id: 46,
                name: "Louisiana",
                detail: "Louisiana is a southeastern U.S. state on the Gulf of Mexico. Its history as a melting pot of French, African, American and French-Canadian cultures is reflected in its Creole and Cajun cultures. The largest city, New Orleans, is known for its colonial-era French Quarter, raucous Mardi Gras festival, jazz music, Renaissance-style St. Louis Cathedral and wartime exhibits at the huge National WWII Museum",
                abr: "LA"
            }
            ,
            "VA": {
                id: 47,
                name: "Virginia",
                detail: "Virginia, a southeastern U.S. state, stretches from the Chesapeake Bay to the Appalachian Mountains, with a long Atlantic coastline. It's one of the 13 original colonies, with historic landmarks including Monticello, founding father Thomas Jefferson’s iconic Charlottesville plantation. The Jamestown Settlement and Colonial Williamsburg are living-history museums reenacting Colonial and Revolutionary-era life.",
                abr: "VA"
            }
            ,
            "KS": {
                id: 48,
                name: "Kansas",
                detail: "Kansas is a state in the Midwestern United States. Its capital is Topeka, and its largest city is Wichita. Kansas is a landlocked state bordered by Nebraska to the north; Missouri to the east; Oklahoma to the south; and Colorado to the west",
                abr: "KS"
            }
            ,
            "KS": {
                id: 48,
                name: "Kansas",
                detail: "Kansas is a state in the Midwestern United States. Its capital is Topeka, and its largest city is Wichita. Kansas is a landlocked state bordered by Nebraska to the north; Missouri to the east; Oklahoma to the south; and Colorado to the west",
                abr: "KS"
            }
            ,
            "NM": {
                id: 49,
                name: "New Mexico",
                detail: "New Mexico is a state in the Southwestern United States. It is one of the Mountain States of the southern Rocky Mountains, sharing the Four Corners region of the western U.S. with Utah, Colorado",
                abr: "NM"
            }
            ,
            "WV": {
                id: 49,
                name: "West Virginia",
                detail: "West Virginia is an eastern U.S. state in the tree-covered Appalachian Mountains. The town of Harpers Ferry, where the Shenandoah River meets the Potomac River, is the site of a famous Civil War–era raid. Surrounded by a national historical park, the town looks as it did in the 19th century, with many of the buildings open to the public as living-history museums",
                abr: "WV"
            }

        }
    }
    $(".states").on("click", function (e) {
        $(".states").removeClass("active");
        $(this).toggleClass("active");
        var ids = $(this).attr("id");
        if ($("#lang").val() == "2" && $("#lang").val() == 2) {
            changelang(ids);
        } else {
            $("#thetable tbody tr td:first-child").text("1");
            $("#thetable tbody tr td:nth-child(2)").text(obj.states[ids].abr);
            $("#thetable tbody tr td:nth-child(3)").text(obj.states[ids].name);
            $("#thetable tbody tr td:nth-child(4)").text(obj.states[ids].detail);
        }
    });
    //  ترجمه
    $("#lang").on("change", function (e) {
        changelang()
    });
// نام شهر ها به فارسی
    const faobj = {
        states: {
            "ME": {
                id: 1,
                name: "مین",
                detail: "مین، شمال شرقی‌ترین ایالت ایالات متحده، به‌خاطر خط ساحلی صخره‌ای، تاریخ دریایی و مناطق طبیعی مانند جزایر گرانیتی و صنوبر پارک ملی آکادیا معروف است. گوزن‌ها در پارک ایالتی باکستر، محل کوه کاتاهدین، نقطه پایانی مسیر آپالاچیان، فراوان هستند. فانوس‌های دریایی مانند فانوس دریایی راه راه در وست کودی هد، در ساحل پراکنده‌اند، همچنین کلبه‌های خرچنگ و سواحل شنی",
                abr: "ME"
            },
            "HI": {
                id: 2,
                name: "هاوائی",
                detail: "هاوایی ایالتی در غرب ایالات متحده است که حدود 2000 مایل از سرزمین اصلی ایالات متحده در اقیانوس آرام فاصله دارد. این تنها ایالت ایالات متحده خارج از آمریکای شمالی، تنها ایالت مجمع الجزایر و تنها ایالت در مناطق استوایی است.",
                abr: "HI"
            },
            "AK": {
                id: 3,
                name: "آلاسکا",
                detail: "آلاسکا یک ایالت ایالات متحده در منتهی الیه شمال غربی آمریکای شمالی است. این منطقه نیمه ای از ایالات متحده است، از شرق با بریتیش کلمبیا و یوکان در کانادا همسایه است و با منطقه خودمختار چوکوتکا فدراسیون روسیه مرز دریایی غربی در تنگه برینگ دارد.",
                abr: "AK"
            },
            "FL": {
                id: 4,
                name: "فلوریدا",
                detail: "فلوریدا جنوب شرقی ترین ایالت ایالات متحده است که در یک طرف اقیانوس اطلس و از طرف دیگر خلیج مکزیک قرار دارد. صدها مایل سواحل دارد. شهر میامی به‌خاطر تأثیرات فرهنگی آمریکای لاتین و صحنه‌های هنری قابل‌توجه، و همچنین زندگی شبانه‌اش، به‌ویژه در ساحل جنوبی لوکس، شناخته شده است. اورلاندو به خاطر پارک های موضوعی از جمله دنیای والت دیزنی مشهور است",
                abr: "FL"
            },
            "SC": {
                id: 5,
                name: "کارولینای جنوبی",
                detail: "کارولینای جنوبی ایالتی در جنوب شرقی ایالات متحده است که به‌خاطر خط ساحلی سواحل نیمه گرمسیری و جزایر دریایی باتلاقی معروف است. ساحلی چارلستون شهری تاریخی است که با خانه‌های پاستلی رنگ، مزارع قدیمی جنوب و فورت سامتر مشخص شده است، جایی که تیرهای آغازین جنگ داخلی در آن شلیک شد. در شمال، گراند استرند، یک امتداد تقریباً 60 مایلی ساحلی است که به‌خاطر زمین‌های گلف و شهر تعطیلات Myrtle Beach معروف است.",
                abr: "SC"
            },
            "GA": {
                id: 6,
                name: "جورجیا",
                detail: "جورجیا ایالتی در جنوب شرقی ایالات متحده است که زمین آن سواحل ساحلی، زمین های کشاورزی و کوه ها را در بر می گیرد. پایتخت آتلانتا، آکواریوم جورجیا و مکان تاریخی ملی مارتین لوتر کینگ جونیور است که به زندگی و زمانه رهبر آفریقایی-آمریکایی اختصاص دارد. شهر ساوانا به خاطر معماری قرن 18 و 19 و میادین عمومی سرسبز مشهور است. آگوستا میزبان مسابقات گلف مسترز است.",
                abr: "GA"
            },
            "AL": {
                id: 7,
                name: "آلاباما",
                detail: "آلاباما ایالتی در جنوب شرقی ایالات متحده است که مکان‌های مهم جنبش حقوق مدنی آمریکا را در خود جای داده است. کلیسای باپتیست خیابان شانزدهم شهر بیرمنگام که اکنون به موزه تبدیل شده است، در دهه 1960 مقر اعتراضات بود. کلیسای مارتین لوتر کینگ جونیور و موزه Rosa Parks که به این فعال اختصاص داده شده است را می توان در پایتخت مونتگومری یافت.",
                abr: "AL"
            },
            "NC": {
                id: 8,
                name: "کارولینای شمالی",
                detail: "کارولینای شمالی ایالتی در منطقه جنوب شرقی ایالات متحده است. این ایالت بیست و هشتمین ایالت بزرگ و نهمین ایالت پرجمعیت ایالات متحده است. از شمال با ویرجینیا، از شرق با اقیانوس اطلس، از جنوب با جورجیا و کارولینای جنوبی و از غرب با تنسی همسایه است.",
                abr: "AL"
            }
            ,
            "TN": {
                id: 9,
                name: "تنسی",
                detail: "تنسی یک ایالت محصور در خشکی در جنوب ایالات متحده است. پایتخت آن، که در مرکز شهر نشویل قرار دارد، قلب صحنه موسیقی کانتری است، با گراند اول اوپری قدیمی، تالار مشاهیر و موزه موسیقی کانتری و مجموعه‌ای افسانه‌ای از هانکی‌تونک‌ها و سالن‌های رقص. ممفیس، در منتهی الیه جنوب غربی، خانه گریسلند الویس پریسلی، استودیو سان پیشگام راک اند رول و کلوپ های بلوز خیابان بیل است.",
                abr: "TN"
            }
            ,
            "RI": {
                id: 10,
                name: "رود آیلند",
                detail: "رود آیلند، ایالتی در ایالات متحده در نیوانگلند، به‌خاطر سواحل شنی و شهرهای ساحلی استعماری شهرت دارد. این شهر خانه چندین شهر بزرگ از جمله نیوپورت است که به خاطر قایقرانی و عمارت‌های عصر طلایی مانند The Breakers مشهور است. پراویدنس، پایتخت آن، محل دانشگاه براون، پارک سبز راجر ویلیامز، پارک آبی محوطه‌سازی‌شده و ریور واک، با تأسیسات هنری مشهور WaterFire است.",
                abr: "TN"
            }
            ,
            "CT": {
                id: 11,
                name: "کنتیکت",
                detail: "کانکتیکات یک ایالت ایالات متحده در جنوب نیوانگلند است که ترکیبی از شهرهای ساحلی و مناطق روستایی پر از شهرهای کوچک دارد. میستیک به‌خاطر موزه بندرگاه پر از کشتی‌های چند صد ساله، و نمایشگاه‌های نهنگ بلوگا در آکواریوم میستیک مشهور است. در لانگ آیلند ساند، شهر نیوهیون به عنوان خانه دانشگاه ییل و موزه تاریخ طبیعی پیبادی تحسین شده آن شناخته می شود.",
                abr: "CT"
            }
            ,
            "MA": {
                id: 12,
                name: "ماساچوست",
                detail: "ماساچوست، با نام رسمی مشترک المنافع ماساچوست، پرجمعیت ترین ایالت در منطقه نیوانگلند در شمال شرقی ایالات متحده است که در سرشماری 2020 ایالات متحده بیش از 7 میلیون نفر جمعیت دارد که بالاترین تعداد ده ساله آن است.",
                abr: "MA"
            }
            ,
            "NH": {
                id: 13,
                name: "نیوهمپشایر",
                detail: "نیوهمپشایر، یک ایالت ایالات متحده در نیوانگلند، با شهرهای عجیب و غریب و گستره وسیعی از بیابان تعریف شده است. در شمال، جنگل ملی کوه سفید به‌خاطر مناطق ورزش‌های زمستانی و کوه واشنگتن، مرتفع‌ترین قله منطقه، با راه‌آهن دنده‌ای تا قله آن، شهرت دارد. همچنین در کوه های سفید گوزن، خرس سیاه و بخشی از مسیر آپالاچیان وجود دارد",
                abr: "NH"
            }
            ,
            "VT": {
                id: 14,
                name: "ورمونت",
                detail: "ورمونت ایالتی در شمال شرقی ایالات متحده است که به دلیل مناظر طبیعی خود که عمدتاً جنگلی است شناخته شده است. بخشی از منطقه نیوانگلند، همچنین به دلیل داشتن بیش از 100 پل چوبی سرپوشیده قرن نوزدهمی و به عنوان تولیدکننده عمده شربت افرا شناخته شده است. هزاران هکتار از زمین های کوهستانی توسط مسیرهای پیاده روی و پیست های اسکی عبور می کنند.",
                abr: "VT"
            }
            ,
            "NY": {
                id: 15,
                name: "نیویورک",
                detail: "نیویورک ایالتی در شمال شرقی ایالات متحده است که به خاطر شهر نیویورک و آبشارهای بلند نیاگارا شهرت دارد. جزیره منهتن نیویورک دارای ساختمان امپایر استیت، میدان تایمز و پارک مرکزی است. پل بروکلین منهتن را به محله بروکلین متصل می کند. مجسمه نمادین آزادی در بندر نیویورک ایستاده است. در شرق، لانگ آیلند دارای سواحل، فانوس دریایی مونتاک، همپتونز و جزیره آتش است.",
                abr: "NY"
            }
            ,
            "NJ": {
                id: 16,
                name: "نیو جرسی",
                detail: "نیوجرسی یکی از ایالت های شمال شرقی ایالات متحده با حدود 130 مایل ساحل اقیانوس اطلس است. جرسی سیتی، در آن سوی رودخانه هادسون از منهتن پایین، محل پارک ایالتی لیبرتی است، جایی که کشتی‌ها به مقصد جزیره الیس در نزدیکی آن، با موزه تاریخی مهاجرت، و مجسمه نمادین آزادی، حرکت می‌کنند. ساحل جرسی شامل شهرهای تفریحی قابل توجهی مانند پارک تاریخی آسبری و کیپ می، با ساختمان‌های ویکتوریایی حفاظت‌شده است.",
                abr: "NJ"
            }
            ,
            "PA": {
                id: 17,
                name: "پنسیلوانیا",
                detail: "پنسیلوانیا، با نام رسمی مشترک المنافع پنسیلوانیا، ایالتی است که در مناطق اقیانوس اطلس میانه، شمال شرقی، آپالاش و دریاچه های بزرگ ایالات متحده قرار دارد.",
                abr: "PA"
            }
            ,
            "DE": {
                id: 18,
                name: "دلاویر",
                detail: "دلاور، یک ایالت کوچک ایالات متحده در اقیانوس اطلس میانه، در شبه جزیره ای واقع شده است که با سواحل پشت شنی در مرز اقیانوس اطلس، رودخانه دلاور و خلیج دلاور مشخص شده است. در دوور، پایتخت، پارک «فرست ایالت هریتیج»، مکان‌های دیدنی دوران استعمار قرن هجدهم مانند خانه قدیمی ایالتی به سبک گرجستان را در بر می‌گیرد. شهر ویلمینگتون به‌خاطر ریورفرانت، ناحیه‌ای در کنار آب با پارک‌ها، بوتیک‌ها و رستوران‌ها معروف است..",
                abr: "DE"
            }
            ,
            "MD": {
                id: 19,
                name: "مریلند",
                detail: "مریلند ایالتی در اقیانوس اطلس است که با آبراه ها و خطوط ساحلی فراوان در خلیج چساپیک و اقیانوس اطلس تعریف شده است. بزرگترین شهر آن، بالتیمور، تاریخ طولانی به عنوان یک بندر دریایی بزرگ دارد. فورت مک‌هنری، زادگاه سرود ملی ایالات متحده، در دهانه بندر داخلی بالتیمور، محل آکواریوم ملی و مرکز علمی مریلند قرار دارد.",
                abr: "MD"
            }
            ,
            "KY": {
                id: 20,
                name: "کنتاکی",
                detail: "کنتاکی ایالتی در جنوب شرقی است که از شمال به رودخانه اوهایو و از شرق به کوه‌های آپالاچی محدود می‌شود و مرکز ایالت فرانکفورت است. بزرگترین شهر این ایالت، لوئیزویل، محل برگزاری دربی کنتاکی، مسابقه اسب‌سواری مشهوری است که در اولین شنبه ماه می در چرچیل داونز برگزار می‌شود. پیش از این مسابقه جشنواره ای 2 هفته ای برگزار می شود و در موزه دربی کنتاکی در تمام طول سال جشن گرفته می شود.",
                abr: "KY"
            }
            ,
            "OH": {
                id: 21,
                name: "اوهایو",
                detail: "اوهایو ایالتی در غرب میانه ایالات متحده است. از بین پنجاه ایالت ایالات متحده، از نظر مساحت سی و چهارمین ایالت بزرگ است. اوهایو با جمعیتی نزدیک به 11.8 میلیون نفر، هفتمین ایالت پرجمعیت و دهمین ایالت پرجمعیت است.",
                abr: "OH"
            }
            ,
            "MI": {
                id: 22,
                name: "میشیگان",
                detail: "میشیگان ایالتی در منطقه دریاچه های بزرگ در غرب میانه ایالات متحده است. از جنوب غربی با ویسکانسین، از جنوب با ایندیانا و اوهایو و از شمال و شمال شرق با استان انتاریو کانادا همسایه است.",
                abr: "MI"
            }
            ,
            "WY": {
                id: 23,
                name: "وایومینگ",
                detail: "وایومینگ (به انگلیسی: Wyoming) ایالتی در منطقه کوهستانی غربی در غرب ایالات متحده است. از شمال و شمال غرب با مونتانا، از شرق با داکوتای جنوبی و نبراسکا، از غرب با آیداهو، از جنوب غربی با یوتا و از جنوب با کلرادو همسایه است.",
                abr: "WY"
            }
            ,
            "MT": {
                id: 24,
                name: "مونتانا",
                detail: "مونتانا یک ایالت غربی است که با زمین های متنوع آن از کوه های راکی تا دشت های بزرگ تعریف شده است. فضاهای باز آن شامل پارک ملی Glacier، حفاظت‌شده در بیابان وسیعی است که به کانادا می‌رود. بسیاری از قله‌های پوشیده از برف، دریاچه‌ها و مسیرهای پیاده‌گردی آلپاین در امتداد جاده معروف Going-to-the-Sun که 50 مایل امتداد دارد به نمایش گذاشته شده است.",
                abr: "MT"
            }
            ,
            "ID": {
                id: 25,
                name: "آیداهو",
                detail: "آیداهو ایالتی در شمال غربی ایالات متحده است که به‌خاطر مناظر کوهستانی، و مناطق وسیعی از مناطق وحشی حفاظت‌شده و مناطق تفریحی در فضای باز شهرت دارد. پایتخت، Boise، در دامنه کوه های راکی قرار دارد و توسط رودخانه Boise، که برای رفتینگ و ماهیگیری محبوب است، به دو نیم تقسیم شده است. پارک جولیا دیویس در کنار رودخانه شهر، فضای سبزی در مرکز شهر است که شامل باغ گل رز، موزه‌ها و باغ‌وحش است.",
                abr: "ID"
            }
            ,
            "WA": {
                id: 26,
                name: "واشینگتن",
                detail: "واشنگتن با نام رسمی ایالت واشنگتن، ایالتی در منطقه شمال غربی اقیانوس آرام در غرب ایالات متحده است.",
                abr: "WA"
            }
            ,
            "TX": {
                id: 27,
                name: "تگزاس",
                detail: "تگزاس ایالتی در جنوب مرکزی ایالات متحده آمریکا است. این ایالت با مساحت 268596 مایل مربع و با بیش از 30 میلیون نفر در سال 2022 دومین ایالت بزرگ ایالات متحده از نظر مساحت و جمعیت است.",
                abr: "TX"
            }
            ,
            "CA": {
                id: 28,
                name: "کالیفرنیا",
                detail: "کالیفرنیا، ایالت غربی ایالات متحده، از مرز مکزیک در امتداد اقیانوس آرام به طول نزدیک به 900 مایل امتداد دارد. زمین آن شامل سواحل پر از صخره، جنگل قرمز، کوه‌های سیرا نوادا، زمین‌های کشاورزی دره مرکزی و صحرای موهاوه است. شهر لس آنجلس مقر صنعت سرگرمی هالیوود است. تپه سانفرانسیسکو به‌خاطر پل گلدن گیت، جزیره آلکاتراز و تله‌کابین معروف است",
                abr: "CA"
            }
            ,
            "AZ": {
                id: 29,
                name: "آریزونا",
                detail: "آریزونا، ایالت جنوب غربی ایالات متحده، بیشتر به خاطر گراند کانیون، شکاف عمیقی که توسط رودخانه کلرادو حک شده است، شناخته شده است. فلگ استاف، یک شهر کوهستانی پوشیده از کاج پوندروسا، دروازه بزرگی به گرند کنیون است. سایر مکان‌های طبیعی عبارتند از پارک ملی ساگوارو، که از چشم‌انداز صحرای سونوران مملو از کاکتوس محافظت می‌کند. توسان قلمرو دانشگاه آریزونا و خانه موزه صحرای آریزونا-سونورا است.",
                abr: "AZ"
            }
            ,
            "NV": {
                id: 30,
                name: "نوادا",
                detail: "نوادا ایالتی در منطقه غربی ایالات متحده است. از شمال غربی با اورگان، از شمال شرقی با آیداهو، از غرب با کالیفرنیا، از جنوب شرقی با آریزونا و از شرق با یوتا همسایه است. نوادا هفتمین وسیع ترین، سی و دومین ایالت پرجمعیت و نهمین ایالت کم تراکم در ایالات متحده است..",
                abr: "NV"
            }
            ,
            "UT": {
                id: 31,
                name: "یوتا",
                detail: "یوتا یک ایالت محصور در خشکی در منطقه کوهستانی غرب غرب ایالات متحده است. از شرق با کلرادو، از شمال شرق با وایومینگ، از شمال با آیداهو، از جنوب با آریزونا و از غرب با نوادا همسایه است. یوتا همچنین گوشه ای از نیومکزیکو را در جنوب شرقی لمس می کند.",
                abr: "UT"
            }
            ,
            "CO": {
                id: 32,
                name: "کلرادو",
                detail: "کلرادو، ایالت غربی ایالات متحده، دارای چشم اندازهای متنوعی از بیابان خشک، دره های رودخانه و کوه های راکی پوشیده از برف است که تا حدودی توسط پارک ملی کوه راکی محافظت می شود. در جای دیگر، پارک ملی Mesa Verde دارای خانه‌های صخره‌ای اجدادی Puebloan است. دنور، پایتخت و بزرگ‌ترین شهر کلرادو، یک مایل بالاتر از سطح دریا، دارای منطقه‌ای پر جنب و جوش در مرکز شهر است.",
                abr: "CO"
            }
            ,
            "OR": {
                id: 33,
                name: "اورگن",
                detail: "اورگان ایالتی در منطقه شمال غربی اقیانوس آرام در ایالات متحده است. اورگان بخشی از غرب ایالات متحده است که رودخانه کلمبیا بخش زیادی از مرز شمالی اورگان را با واشنگتن ترسیم می کند، در حالی که رودخانه اسنیک قسمت زیادی از مرز شرقی خود را با آیدا مشخص می کند.",
                abr: "OR"
            }
            ,
            "ND": {
                id: 34,
                name: "داکوتای شمالی",
                detail: "داکوتای شمالی یک ایالت غرب میانه ایالات متحده است که تحت تسلط دشت های بزرگ است. شهر شرقی آن، فارگو، هنر بومی آمریکا و هنر مدرن را در موزه هنر پلینز به نمایش می گذارد. تاریخ مهاجر این منطقه در انجمن میراث اسکاندیناوی در شهر مینوت گرامی داشته می شود. دشت های بزرگ جای خود را به بدلندهای ناهموار در نزدیکی مرز مونتانا می دهد، جایی که پارک ملی تئودور روزولت بر روی رودخانه میسوری کوچک قرار دارد.",
                abr: "ND"
            }
            ,
            "SD": {
                id: 35,
                name: "داکوتای جنوبی",
                detail: "داکوتای جنوبی یک ایالت پهناور و کم جمعیت در غرب میانه ایالات متحده است که در آن دشت های غلتان جای خود را به جنگل ملی تپه های سیاه شگفت انگیز می دهند. بلک هیلز دارای ۲ بنای تاریخی است که درست در قله‌های گرانیتی حک شده‌اند: کوه راشمور، تصویر نمادین ۴ رئیس‌جمهور محترم ایالات متحده، و یادبود اسب دیوانه، ادای احترام به رهبر قبایل بومی آمریکایی.",
                abr: "SD"
            }
            ,
            "NE": {
                id: 36,
                name: "نبراسکا",
                detail: "نبراسکا ایالتی در غرب میانه ایالات متحده است که شامل دشت‌های بزرگ، تپه‌های شنی بلند Sandhills و صخره‌های چشمگیر پانهندل است. لینکلن، پایتخت و یک شهر دانشگاهی پرجنب‌وجوش، با مرکز سر به فلک کشیده ایالتش متمایز است. شهر اوماها خانه موزه دورهام است که به گذشته پیشگام این ایالت در یک انبار راه آهن تغییر کاربری داده شده است. ",
                abr: "NE"
            }
            ,
            "IA": {
                id: 37,
                name: "آیووا",
                detail: "آیووا، یک ایالت غرب میانه ایالات متحده، بین رودخانه های میسوری و می سی سی پی قرار دارد. این شهر به خاطر چشم انداز دشت های چرخان و مزارع ذرت شناخته شده است. دیدنی‌های پایتخت، د موین، شامل ساختمان کنگره ایالتی قرن نوزدهمی با گنبد طلا، پارک مجسمه‌سازی پاپاژون و مرکز هنری د موین است که به‌خاطر مجموعه‌های معاصرش مشهور است. موزه هنر شهر سدار رپیدز دارای نقاشی هایی از بومی آیوان گرانت وود است.",
                abr: "VT"
            }
            ,
            "MS": {
                id: 38,
                name: "میسیسیپی",
                detail: "می سی سی پی ایالت جنوبی ایالات متحده با رودخانه می سی سی پی در غرب، ایالت آلاباما در شرق و خلیج مکزیک در جنوب است. منطقه دلتای می سی سی پی آن زادگاه موسیقی بلوز محسوب می شود که در موزه دلتا بلوز در کلارکزدیل مورد تقدیر قرار گرفته است. همچنین در این منطقه پارک ملی نظامی ویکسبورگ قرار دارد که محل نبرد حیاتی جنگ داخلی را حفظ کرده است",
                abr: "MS"
            }
            ,
            "IN": {
                id: 39,
                name: "ایندیانا",
                detail: "ایندیانا یک ایالت ایالات متحده در غرب میانه ایالات متحده است. این ایالت سی و هشتمین از نظر مساحت و هفدهمین پرجمعیت ترین ایالت از 50 ایالت است. پایتخت و بزرگترین شهر آن ایندیاناپولیس است. ایندیانا در دسامبر به عنوان نوزدهمین ایالت در ایالات متحده پذیرفته شد ",
                abr: "IN"
            }
            ,
            "IL": {
                id: 40,
                name: "ایلینوی",
                detail: "لینویز ایالتی در غرب میانه است که در شرق با ایندیانا و در غرب با رودخانه می سی سی پی هم مرز است. این منطقه که «ایالت پریری» نام دارد، با زمین‌های کشاورزی، جنگل‌ها، تپه‌ها و تالاب‌ها مشخص شده است. شیکاگو، یکی از بزرگترین شهرهای ایالات متحده، در شمال شرقی در سواحل دریاچه میشیگان قرار دارد. این شهر به خاطر آسمان خراش هایش مانند براق 1451 فوتی است. برج ویلیس و برج تریبون نئوگوتیک.",
                abr: "IL"
            }
            ,
            "MN": {
                id: 41,
                name: "مینه‌سوتا",
                detail: "مینه سوتا ایالتی در غرب میانه ایالات متحده است که با کانادا و دریاچه سوپریور، بزرگترین دریاچه بزرگ، هم مرز است. این ایالت دارای بیش از 10000 دریاچه دیگر از جمله دریاچه Itasca، منبع اصلی رودخانه می سی سی پی است. «شهرهای دوقلو» مینیاپولیس و پایتخت ایالت سنت پل مملو از بناهای فرهنگی مانند موزه علوم مینه سوتا و مرکز هنر واکر، موزه هنر مدرن است.",
                abr: "VT"
            }
            ,
            "WI": {
                id: 42,
                name: "ویسکانسین",
                detail: "ویسکانسین ایالتی در غرب میانه ایالات متحده با خطوط ساحلی در 2 دریاچه بزرگ (میشیگان و سوپریور) و فضای داخلی جنگل ها و مزارع است. میلواکی، بزرگترین شهر، به‌خاطر موزه عمومی میلواکی، با دهکده‌های بین‌المللی بازآفرینی‌شده متعدد، و موزه هارلی دیویدسون، که موتورسیکلت‌های کلاسیک را به نمایش می‌گذارد، شهرت دارد. چندین شرکت آبجو در میلواکی مستقر هستند و بسیاری از آنها تورهای آبجوسازی را ارائه می دهند",
                abr: "WI"
            }
            ,
            "MO": {
                id: 43,
                name: "میزوری",
                detail: "میسوری ایالتی در منطقه غرب میانه ایالات متحده است. از نظر مساحت در رتبه 21 قرار دارد و با هشت ایالت همسایه است: آیووا در شمال، ایلینوی، کنتاکی و تنسی در شرق، آرکانزاس در جنوب و اوکلاهما، کانزاس و نبراسکا از غرب.",
                abr: "MO"
            }
            ,
            "AR": {
                id: 44,
                name: "اکلاهما",
                detail: "اوکلاهاما ایالتی در منطقه مرکزی جنوبی ایالات متحده است که از جنوب و غرب با تگزاس، از شمال با کانزاس، از شمال شرقی با میسوری، از شرق با آرکانزاس، از غرب با نیومکزیکو و از شمال غربی با کلرادو همسایه است.",
                abr: "AR"
            }
            ,
            "OK": {
                id: 45,
                name: "ورمونت",
                detail: "ورمونت ایالتی در شمال شرقی ایالات متحده است که به دلیل مناظر طبیعی خود که عمدتاً جنگلی است شناخته شده است. بخشی از منطقه نیوانگلند، همچنین به دلیل داشتن بیش از 100 پل چوبی سرپوشیده قرن نوزدهمی و به عنوان تولیدکننده عمده شربت افرا شناخته شده است. هزاران هکتار از زمین های کوهستانی توسط مسیرهای پیاده روی و پیست های اسکی عبور می کنند.",
                abr: "OK"
            }
            ,
            "LA": {
                id: 46,
                name: "لوئیزیانا",
                detail: "لوئیزیانا یک ایالت جنوب شرقی ایالات متحده در خلیج مکزیک است. تاریخ آن به عنوان دیگ ذوب فرهنگ های فرانسوی، آفریقایی، آمریکایی و فرانسوی-کانادایی در فرهنگ های کریول و کاجون آن منعکس شده است. بزرگ‌ترین شهر، نیواورلئان، به‌خاطر محله فرانسوی دوران استعمار، جشنواره ماردی گراس، موسیقی جاز، کلیسای جامع سنت لوئیس به سبک رنسانس و نمایشگاه‌های زمان جنگ در موزه بزرگ ملی جنگ جهانی دوم شهرت دارد.",
                abr: "LA"
            }
            ,
            "VA": {
                id: 47,
                name: "ویرجینیا",
                detail: "ویرجینیا، ایالتی در جنوب شرقی ایالات متحده، از خلیج چساپیک تا کوه‌های آپالاچی، با خط ساحلی طولانی اقیانوس اطلس امتداد دارد. این یکی از 13 مستعمره اصلی است، با بناهای تاریخی از جمله Monticello، مزرعه نمادین شارلوتسویل پدر موسس توماس جفرسون. شهرک جیمزتاون و استعمار ویلیامزبورگ موزه‌های تاریخی زنده هستند که زندگی دوران استعمار و انقلاب را بازسازی می‌کنند.",
                abr: "VA"
            }
            ,
            "KS": {
                id: 48,
                name: "کانزاس",
                detail: "کانزاس ایالتی در غرب میانه ایالات متحده است. پایتخت آن توپکا و بزرگترین شهر آن ویچیتا است. کانزاس یک ایالت محصور در خشکی است که از شمال با نبراسکا هم مرز است. میسوری در شرق؛ اوکلاهما در جنوب؛ و کلرادو در غرب",
                abr: "KS"
            }
            ,
            "NM": {
                id: 50,
                name: "نیومکزیکو",
                detail: "نیومکزیکو ایالتی در جنوب غربی ایالات متحده است. این یکی از ایالت های کوهستانی کوه های راکی جنوبی است که منطقه چهار گوشه غرب ایالات متحده را با یوتا، کلرادو به اشتراک می گذارد.",
                abr: "NM"
            }
            ,
            "WV": {
                id: 51,
                name: "ویرجینیای غربی",
                detail: "ویرجینیای غربی یک ایالت شرقی ایالات متحده در کوه‌های پوشیده از درخت آپالاچی است. شهر هارپرز فری، جایی که رودخانه Shenandoah با رودخانه Potomac ملاقات می کند، محل حمله معروف دوران جنگ داخلی است. این شهر که توسط یک پارک تاریخی ملی احاطه شده است، مانند قرن نوزدهم به نظر می رسد و بسیاری از ساختمان ها به عنوان موزه های تاریخ زنده برای بازدید عموم باز هستند.",
                abr: "WV"
            }

        }
    }

    // تغییر زبان
    function changelang(id = "") {
        console.log(id);
        if ($("#lang").val() == "2" && $("#lang").val() == 2) {
            $("html").attr("lang", "fa-IR")
            $("#langform label").text("زبان خود را انتخاب کنید");
            $("#styleform label").text("استایل جدول خود را انتخاب کنید!");
            $("#thetable thead tr th:first-child").text("ردیف");
            $("#thetable thead tr th:nth-child(2)").text("اختصار");
            $("#thetable thead tr th:nth-child(3)").text("اسم ایالت");
            $("#thetable thead tr th:nth-child(4)").text("توضیحات");
            if ($("#thetable tbody tr td:nth-child(2)").text() != "") {
                if (id != "") {
                    ids = id;
                }
                else {
                    ids = $("#thetable tbody tr td:nth-child(2)").text();
                }
                console.log(ids);
                $("#thetable tbody tr td:first-child").text("1");
                $("#thetable tbody tr td:nth-child(2)").text(faobj.states[ids].abr);
                $("#thetable tbody tr td:nth-child(3)").text(faobj.states[ids].name);
                $("#thetable tbody tr td:nth-child(4)").text(faobj.states[ids].detail);
            } else {
                if (id != "") {
                    ids = id;
                    console.log(ids);
                    $("#thetable tbody tr td:first-child").text("1");
                    $("#thetable tbody tr td:nth-child(2)").text(faobj.states[ids].abr);
                    $("#thetable tbody tr td:nth-child(3)").text(faobj.states[ids].name);
                    $("#thetable tbody tr td:nth-child(4)").text(faobj.states[ids].detail);
                }
            }
            $("#thetable tfoot tr th:first-child").text("ردیف");
            $("#thetable tfoot tr th:nth-child(2)").text("اختصار");
            $("#thetable tfoot tr th:nth-child(3)").text("اسم ایالت");
            $("#thetable tfoot tr th:nth-child(4)").text("توضیحات");
        } else {
            $("html").attr("lang", "EN");
            $("#langform label").text("Select Your Language");
            $("#styleform label").text("choose style");
            $("#thetable thead tr th:first-child").text("id");
            $("#thetable thead tr th:nth-child(2)").text("state name");
            $("#thetable thead tr th:nth-child(3)").text("details");
            $("#thetable tfoot tr th:first-child").text("id");
            $("#thetable tfoot tr th:nth-child(2)").text("state name");
            $("#thetable tfoot tr th:nth-child(3)").text("details");
            if ($("#thetable tbody tr td:nth-child(2)").text() != "") {
                $("#thetable tbody tr td:first-child").text("1");
                $("#thetable tbody tr td:nth-child(2)").text(obj.states[ids].abr);
                $("#thetable tbody tr td:nth-child(3)").text(obj.states[ids].name);
                $("#thetable tbody tr td:nth-child(4)").text(obj.states[ids].detail);
            }

        }
    }

    // انتخاب نوع جدول
    $("#tablestyle").on("change", function (e) {
        let tablestyle = $(this).val();
        $("#thetable").attr("class", "");
        $("#thetable").addClass(tablestyle);
    });
})

