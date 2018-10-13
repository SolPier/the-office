import Route from '@ember/routing/route';

// episodes sources:
//   https://watchtheoffice.online
//   https://www.youwatch-series.com/the-office-us-streaming-gratuit-R4ISE00.html
//   https://www4.voirfilms.ws/serie/the-office-us-hyeIqwJRN.htm

export default Route.extend({
  model() {
    return [
      {
        number: 1,
        episodes: [
          { number: 1, name: "Pilot",         videoUrl: 'https://openload.co/embed/T408kM6sBXI/S01E01.mkv.mp4' },
          { number: 2, name: "Diversity Day", videoUrl: 'https://openload.co/embed/ISL0gtAPQ1M/S01E02.mkv.mp4' },
          { number: 3, name: "Health Care",   videoUrl: 'https://openload.co/embed/Ydt4Qg5H3UU/S01E03.mkv.mp4' },
          { number: 4, name: "The Alliance",  videoUrl: 'https://openload.co/embed/kwkIv8YUjdQ/S01E04.mkv.mp4' },
          { number: 5, name: "Basketball",    videoUrl: 'https://openload.co/embed/8lywYS6XRz0/S01E05.mkv.mp4' },
          { number: 6, name: "Hot Girl",      videoUrl: 'https://streamango.com/embed/bfbplkammmbdleof'        }
        ]
      },
      {
        number: 2,
        episodes: [
          { number: 1,  name: "The Dundies",                    videoUrl: 'https://openload.co/embed/qAdOk03kJNI/S02E01.mkv.mp4' },
          { number: 2,  name: "Sexual Harassment",              videoUrl: 'https://openload.co/embed/ACbw_0mObzo/S02E02.mkv.mp4' },
          { number: 3,  name: "Office Olympics",                videoUrl: 'https://openload.co/embed/wA_jgjGOejA/S02E03.mkv.mp4' },
          { number: 4,  name: "The Fire",                       videoUrl: 'https://streamango.com/embed/oqbkkoeedmtfcssq'        },
          { number: 5,  name: "Halloween",                      videoUrl: 'https://streamango.com/embed/rdaactqdanksecsm'        },
          { number: 6,  name: "The Fight",                      videoUrl: 'https://streamango.com/embed/abnmlrspsoasffst'        },
          { number: 7,  name: "The Client",                     videoUrl: 'https://streamango.com/embed/abpqarkokbfdcpco'        },
          { number: 8,  name: "Performance Review",             videoUrl: 'https://openload.co/embed/aj6PNiYSnJw/S02E08.mkv.mp4' },
          { number: 9,  name: "E-mail Surveillance",            videoUrl: 'https://streamango.com/embed/bbkqtsfqprksldef'        },
          { number: 10, name: "Christmas Party",                videoUrl: 'https://streamango.com/embed/netmmfbrkbqlmldt'        },
          { number: 11, name: "Booze Cruise",                   videoUrl: 'https://openload.co/embed/IhxUZ15-xN0/S02E11.mkv.mp4' },
          { number: 12, name: "The Injury",                     videoUrl: 'https://streamango.com/embed/lapnqmcdfptqnlka'        },
          { number: 13, name: "The Secret",                     videoUrl: 'https://streamango.com/embed/rsankkrdksfnqbrn'        },
          { number: 14, name: "The Carpet",                     videoUrl: 'https://streamango.com/embed/ebtrttreckppenqq'        },
          { number: 15, name: "Boys and Girls",                 videoUrl: 'https://streamango.com/embed/obkrsanlfncaplbo'        },
          { number: 16, name: "Valentine's Day",                videoUrl: 'https://openload.co/embed/8e99BLR3vPU/S02E16.mkv.mp4' },
          { number: 17, name: "Dwight's Speech",                videoUrl: 'https://streamango.com/embed/canpnbdokltlmpkl'        },
          { number: 18, name: "Take Your Daughter to Work Day", videoUrl: 'https://openload.co/embed/VG_9teQK2nY/S02E18.mkv.mp4' },
          { number: 19, name: "Michael's Birthday",             videoUrl: 'https://openload.co/embed/N0OOW8YJ9ik/S02E19.mkv.mp4' },
          { number: 20, name: "Drug Testing",                   videoUrl: 'https://streamango.com/embed/olosessbktefoonp'        },
          { number: 21, name: "Conflict Resolution",            videoUrl: 'https://streamango.com/embed/lmrplqmfdntlaaln'        },
          { number: 22, name: "Casino Night",                   videoUrl: 'https://openload.co/embed/bVwmPYDFadc/S02E22.mkv.mp4' }
        ]
      },
      {
        number: 3,
        episodes: [
          { number: 1,       name: "Gay Witch Hunt",        videoUrl: 'https://streamango.com/embed/fdftetalpdkpbmso'           },
          { number: 2,       name: "The Convention",        videoUrl: 'https://streamango.com/embed/aldntelpksbctklb'           },
          { number: 3,       name: "The Coup",              videoUrl: 'https://streamango.com/embed/ftmssspetkmbsmsf'           },
          { number: 4,       name: "Grief Counseling",      videoUrl: 'https://streamango.com/embed/mertopscbcasapob'           },
          { number: 5,       name: "Initiation",            videoUrl: 'https://streamango.com/embed/matcksfmtollpqne'           },
          { number: 6,       name: "Diwali",                videoUrl: 'https://streamango.com/embed/aermqnfmotcqsala'           },
          { number: 7,       name: "Branch Closing",        videoUrl: 'https://streamango.com/embed/aqnrppqpranobatt'           },
          { number: 8,       name: "The Merger",            videoUrl: 'https://streamango.com/embed/kfmpktaafetlpdqn'           },
          { number: 9,       name: "The Convict",           videoUrl: 'https://streamango.com/embed/dopasbkqrkmncrfc'           },
          { number: '10-11', name: "A Benihana Christmas",  videoUrl: 'https://streamango.com/embed/bdalttanepalfnpk'           },
          { number: 12,      name: "Back from Vacation",    videoUrl: 'https://streamango.com/embed/lrpsebnlbeetmnsm'           },
          { number: 13,      name: "Traveling Salesmen",    videoUrl: 'https://openload.co/embed/a50dTka0dPw/S03E13.mkv.mp4'    },
          { number: 14,      name: "The Return",            videoUrl: 'https://openload.co/embed/NTc6uJxM-3U/S03E14.mkv.mp4'    },
          { number: 15,      name: "Ben Franklin",          videoUrl: 'https://streamango.com/embed/cflknbtdfrsnlctn'           },
          { number: 16,      name: "Phyllis' Wedding",      videoUrl: 'https://streamango.com/embed/mfendrktoebakbnp'           },
          { number: 17,      name: "Business School",       videoUrl: 'https://streamango.com/embed/nkmfnmqnecblqqdp'           },
          { number: 18,      name: "Cocktails",             videoUrl: 'https://streamango.com/embed/bosfcqlkmomfbson'           },
          { number: 19,      name: "The Negotiation",       videoUrl: 'https://streamango.com/embed/ncdmkeknkdrmsoen'           },
          { number: 20,      name: "Safety Training",       videoUrl: 'https://streamango.com/embed/nlecqpacnpmerorc'           },
          { number: 21,      name: "Product Recall",        videoUrl: 'https://openload.co/embed/cfd1WITbv6g/S03E21.mkv.mp4'    },
          { number: 22,      name: "Women's Appreciation",  videoUrl: 'https://openload.co/embed/BkDcke_35xg/S03E22.mkv.mp4'    },
          { number: 23,      name: "Beach Games",           videoUrl: 'https://openload.co/embed/ajK4F33luGI/S03E23.mkv.mp4'    },
          { number: '24-25', name: "The Job",               videoUrl: 'https://openload.co/embed/Hin2n2oP4D0/S03E24-25.mkv.mp4' }
        ]
      },
      {
        number: 4,
        episodes: [
          { number: '1-2',   name: "Fun Run",                 videoUrl: 'https://openload.co/embed/IqP9bi39EyE/S04E01-02.mkv.mp4' },
          { number: '3-4',   name: "Dunder Mifflin Infinity", videoUrl: 'https://openload.co/embed/t2nh9Vn9LaM/S04E03-04.mkv.mp4' },
          { number: '5-6',   name: "Launch Party",            videoUrl: 'https://openload.co/embed/9cZWAOCBfMw/S04E05-06.mkv.mp4' },
          { number: '7-8',   name: "Money",                   videoUrl: 'https://openload.co/embed/9PBiS1y8TkY/S04E07-08.mkv.mp4' },
          { number: 9,       name: "Local Ad",                videoUrl: 'https://openload.co/embed/2PO_IPBujEU/S04E09.mkv.mp4'    },
          { number: 10,      name: "Branch Wars",             videoUrl: 'https://openload.co/embed/DuzxsiVEGkU/S04E10.mkv.mp4'    },
          { number: 11,      name: "Survivor Man",            videoUrl: 'https://openload.co/embed/35ipStThoCg/S04E11.mkv.mp4'    },
          { number: 12,      name: "Deposition",              videoUrl: 'https://openload.co/embed/AF6hfZRJRjw/S04E12.mkv.mp4'    },
          { number: 13,      name: "Dinner Party",            videoUrl: 'https://openload.co/embed/OmdptWARKWI/S04E13.mkv.mp4'    },
          { number: 14,      name: "Chair Model",             videoUrl: 'https://openload.co/embed/y8HEyMYe3wE/S04E14.mkv.mp4'    },
          { number: 15,      name: "Night Out",               videoUrl: 'https://openload.co/embed/t2ER0tfEbf4/S04E15.mkv.mp4'    },
          { number: 16,      name: "Did I Stutter?",          videoUrl: 'https://openload.co/embed/ROXhq662to4/S04E16.mkv.mp4'    },
          { number: 17,      name: "Job Fair",                videoUrl: 'https://openload.co/embed/cadcPYKOKCU/S04E17.mkv.mp4'    },
          { number: '18-19', name: "Goodbye Toby",            videoUrl: 'https://openload.co/embed/nFzqNrwR_2M/S04E18-19.mkv.mp4' }
        ]
      },
      {
        number: 5,
        episodes: [
          { number: '1-2',   name: "Weight Loss",                     videoUrl: 'https://openload.co/embed/r8j67tz7yPE/S05E01.mkv.mp4' },
          { number: 3,       name: "Business Ethics",                 videoUrl: 'https://openload.co/embed/GA1twYx6ODA/S05E02.mkv.mp4' },
          { number: 4,       name: "Baby Shower",                     videoUrl: 'https://openload.co/embed/-4NrG5J_2no/S05E03.mkv.mp4' },
          { number: 5,       name: "Crime Aid",                       videoUrl: 'https://openload.co/embed/v48o3I9tJ7E/S05E04.mkv.mp4' },
          { number: 6,       name: "Employee Transfer",               videoUrl: 'https://streamango.com/embed/fsrfmrdmeppdqtsp'        },
          { number: 7,       name: "Customer Survey",                 videoUrl: 'https://openload.co/embed/eLGJxXW3RHw/S05E06.mkv.mp4' },
          { number: 8,       name: "Business Trip",                   videoUrl: 'https://openload.co/embed/53CV0l46EYw/S05E07.mkv.mp4' },
          { number: 9,       name: "Frame Toby",                      videoUrl: 'https://openload.co/embed/o_9J0PIQejA/S05E08.mkv.mp4' },
          { number: 10,      name: "The Surplus",                     videoUrl: 'https://openload.co/embed/GexXSWPbiK4/S05E09.mkv.mp4' },
          { number: 11,      name: "Moroccan Christmas",              videoUrl: 'https://openload.co/embed/sp2CjZi27Io/S05E10.mkv.mp4' },
          { number: 12,      name: "The Duel",                        videoUrl: 'https://openload.co/embed/1QuNCBRZVt4/S05E11.mkv.mp4' },
          { number: 13,      name: "Prince Family Paper",             videoUrl: 'https://openload.co/embed/oCzfOyiWp5M/S05E12.mkv.mp4' },
          { number: '14-15', name: "Stress Relief",                   videoUrl: 'https://openload.co/embed/YCxcxLA19DE/S05E13.mkv.mp4' },
          { number: 16,      name: "Lecture Circuit (1)",             videoUrl: 'https://openload.co/embed/PynmhsrIHEk/S05E14.mkv.mp4' },
          { number: 17,      name: "Lecture Circuit (2)",             videoUrl: 'https://openload.co/embed/8VCtT4F_qVI/S05E15.mkv.mp4' },
          { number: 18,      name: "Blood Drive",                     videoUrl: 'https://openload.co/embed/-tN0js76_SU/S05E16.mkv.mp4' },
          { number: 19,      name: "Golden Ticket",                   videoUrl: 'https://openload.co/embed/jvBJXZXCj1c/S05E17.mkv.mp4' },
          { number: 20,      name: "New Boss",                        videoUrl: 'https://openload.co/embed/gmrr_uj252I/S05E18.mkv.mp4' },
          { number: 21,      name: "Two Weeks",                       videoUrl: 'https://openload.co/embed/haH4dLOCPxI/S05E19.mkv.mp4' },
          { number: 22,      name: "Dream Team",                      videoUrl: 'https://openload.co/embed/VsjPwpHvswg/S05E20.mkv.mp4' },
          { number: 23,      name: "The Michael Scott Paper Company", videoUrl: 'https://openload.co/embed/iSTQpTr92p4/S05E21.mkv.mp4' },
          { number: 24,      name: "Heavy Competition",               videoUrl: 'https://openload.co/embed/a_846uD98ZM/S05E22.mkv.mp4' },
          { number: 25,      name: "Broke",                           videoUrl: 'https://openload.co/embed/KHyxbDmUQyk/S05E23.mkv.mp4' },
          { number: 26,      name: "Casual Friday",                   videoUrl: 'https://openload.co/embed/ehD8CNPp3Bc/S05E24.mkv.mp4' },
          { number: 27,      name: "Cafe Disco",                      videoUrl: 'https://openload.co/embed/VYOky8XdukM/S05E25.mkv.mp4' },
          { number: 28,      name: "Company Picnic",                  videoUrl: 'https://openload.co/embed/5sMtF6iDrCU/S05E26.mkv.mp4' }
        ]
      },
      // {
      //   number: 6,
      //   episodes: [
      //     { number: 1,     name: "Gossip",               videoUrl: '' },
      //     { number: 2,     name: "The Meeting",          videoUrl: '' },
      //     { number: 3,     name: "The Promotion",        videoUrl: '' },
      //     { number: '4-5', name: "Niagara",              videoUrl: '' },
      //     { number: 6,     name: "Mafia",                videoUrl: '' },
      //     { number: 7,     name: "The Lover",            videoUrl: '' },
      //     { number: 8,     name: "Koi Pond",             videoUrl: '' },
      //     { number: 9,     name: "Double Date",          videoUrl: '' },
      //     { number: 10,    name: "Murder",               videoUrl: '' },
      //     { number: 11,    name: "Shareholder Meeting",  videoUrl: '' },
      //     { number: 12,    name: "Scott’s Tots",         videoUrl: '' },
      //     { number: 13,    name: "Secret Santa",         videoUrl: '' },
      //     { number: 14,    name: "The Banker",           videoUrl: '' },
      //     { number: 15,    name: "Sabre",                videoUrl: '' },
      //     { number: 16,    name: "Manager and Salesman", videoUrl: '' },
      //     { number: 17,    name: "The Delivery, Part 1", videoUrl: '' },
      //     { number: 18,    name: "The Delivery, Part 2", videoUrl: '' },
      //     { number: 19,    name: "St. Patrick’s Day",    videoUrl: '' },
      //     { number: 20,    name: "New Leads",            videoUrl: '' },
      //     { number: 21,    name: "Happy Hour",           videoUrl: '' },
      //     { number: 22,    name: "Secretary’s Day",      videoUrl: '' },
      //     { number: 23,    name: "Body Language",        videoUrl: '' },
      //     { number: 24,    name: "The Cover-Up",         videoUrl: '' },
      //     { number: 25,    name: "The Chump",            videoUrl: '' },
      //     { number: 26,    name: "Whistleblower",        videoUrl: '' }
      //   ]
      // },
      // {
      //   number: 7,
      //   episodes: [
      //     { number: 1,  name: "Nepotism",                            videoUrl: '' },
      //     { number: 2,  name: "Counseling",                          videoUrl: '' },
      //     { number: 3,  name: "Andy's Play",                         videoUrl: '' },
      //     { number: 4,  name: "Sex Ed",                              videoUrl: '' },
      //     { number: 5,  name: "The Sting",                           videoUrl: '' },
      //     { number: 6,  name: "Costume Contest",                     videoUrl: '' },
      //     { number: 7,  name: "Christening",                         videoUrl: '' },
      //     { number: 8,  name: "Viewing Party",                       videoUrl: '' },
      //     { number: 9,  name: "WUPHF.com",                           videoUrl: '' },
      //     { number: 10, name: "China",                               videoUrl: '' },
      //     { number: 11, name: "Classy Christmas, Part 1",            videoUrl: '' },
      //     { number: 12, name: "Classy Christmas, Part 1",            videoUrl: '' },
      //     { number: 13, name: "Ultimatum",                           videoUrl: '' },
      //     { number: 14, name: "The Seminar",                         videoUrl: '' },
      //     { number: 15, name: "The Search",                          videoUrl: '' },
      //     { number: 16, name: "PDA",                                 videoUrl: '' },
      //     { number: 17  name: "Threat Level Midnight",               videoUrl: '' },
      //     { number: 18  name: "Todd Packer",                         videoUrl: '' },
      //     { number: 19  name: "Garage Sale",                         videoUrl: '' },
      //     { number: 20  name: "Training Day",                        videoUrl: '' },
      //     { number: 21, name: "Michael's Last Dundies",              videoUrl: '' },
      //     { number: 22, name: "Goodbye, Michael",                    videoUrl: '' },
      //     { number: 23, name: "The Inner Circle",                    videoUrl: '' },
      //     { number: 24, name: "Dwight K. Schrute, (Acting) Manager", videoUrl: '' },
      //     { number: 25, name: "Search Committee, Part1",             videoUrl: '' },
      //     { number: 26, name: "Search Committee, Part2",             videoUrl: '' },
      //   ]
      // },
      // {
      //   number: 8,
      //   episodes: [
      //     { number: 1,  name: "The List",                    videoUrl: '' },
      //     { number: 2,  name: "The Incentive",               videoUrl: '' },
      //     { number: 3,  name: "Lotto",                       videoUrl: '' },
      //     { number: 4,  name: "Garden Party",                videoUrl: '' },
      //     { number: 5,  name: "Spooked",                     videoUrl: '' },
      //     { number: 6,  name: "Doomsday",                    videoUrl: '' },
      //     { number: 7,  name: "Pam's Replacement",           videoUrl: '' },
      //     { number: 8,  name: "Gettysburg",                  videoUrl: '' },
      //     { number: 9,  name: "Mrs. California",             videoUrl: '' },
      //     { number: 10, name: "Christmas Wishes",            videoUrl: '' },
      //     { number: 11, name: "Trivia",                      videoUrl: '' },
      //     { number: 12, name: "Pool Party",                  videoUrl: '' },
      //     { number: 13, name: "Jury Duty",                   videoUrl: '' },
      //     { number: 14, name: "Special Project",             videoUrl: '' },
      //     { number: 15, name: "Tallahassee",                 videoUrl: '' },
      //     { number: 16, name: "After Hours",                 videoUrl: '' },
      //     { number: 17, name: "Test the Store",              videoUrl: '' },
      //     { number: 18, name: "Last Day in Florida",         videoUrl: '' },
      //     { number: 19, name: "Get the Girl",                videoUrl: '' },
      //     { number: 20, name: "Welcome Party",               videoUrl: '' },
      //     { number: 21, name: "Angry Andy",                  videoUrl: '' },
      //     { number: 22, name: "Fundraiser",                  videoUrl: '' },
      //     { number: 23, name: "Turf War",                    videoUrl: '' },
      //     { number: 24, name: "Free Family Portrait Studio", videoUrl: '' },
      //   ]
      // },
      // {
      //   number: 9,
      //   episodes: [
      //     { number: 1,       name: "New Guys", videoUrl: '' },
      //     { number: 2,       name: "Roy's Wedding", videoUrl: '' },
      //     { number: 3,       name: "Andy's Ancestry", videoUrl: '' },
      //     { number: 4,       name: "Work Bus", videoUrl: '' },
      //     { number: 5,       name: "Here Comes Treble", videoUrl: '' },
      //     { number: 6,       name: "The Boat", videoUrl: '' },
      //     { number: 7,       name: "The Whale", videoUrl: '' },
      //     { number: 8,       name: "The Target", videoUrl: '' },
      //     { number: 9,       name: "Dwight Christmas", videoUrl: '' },
      //     { number: 10,      name: "Lice", videoUrl: '' },
      //     { number: 11,      name: "Suit Warehouse", videoUrl: '' },
      //     { number: 12,      name: "Customer Loyalty", videoUrl: '' },
      //     { number: 13,      name: "Junior Salesman", videoUrl: '' },
      //     { number: 14,      name: "Vandalism", videoUrl: '' },
      //     { number: 15,      name: "Couples Discount", videoUrl: '' },
      //     { number: 16,      name: "Moving On", videoUrl: '' },
      //     { number: 17,      name: "The Farm", videoUrl: '' },
      //     { number: 18,      name: "Promos", videoUrl: '' },
      //     { number: 19,      name: "Stairmageddon", videoUrl: '' },
      //     { number: 20,      name: "Paper Airplane", videoUrl: '' },
      //     { number: 21,      name: "Livin' the Dream", videoUrl: '' },
      //     { number: '22-23', name: "A.A.R.M", videoUrl: '' },
      //     { number: '24-25', name: "Finale", videoUrl: '' },
      //   ]
      // },
    ]
  }
});
