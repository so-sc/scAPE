"use client";
import React, { useEffect, useState } from "react";
import NoUserFound from "@/components/NoUserFound";
import QRCode from 'qrcode';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Users, School } from "lucide-react";
import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/viewteam/loading";

const CursorTrailCanvas = dynamic(() => import('@/components/CursorTrailCanvas'), { ssr: false });

interface TeamData {
  id: string;
  team_name: string;
  members: string[];
  college: string;
}

const teams: TeamData[] = [
  {
    "id": "HN-01",
    "team_name": "TecHomies",
    "members": [
      "Bharath Rai",
      "Vignesh D Jogi",
      "Sharath",
      "1231- Mahesh H"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-02",
    "team_name": "Team-404",
    "members": [
      "Minhaz Ahmed",
      "Yash Laxman",
      "Saket Hegde",
      "Koshin Hegde"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-03",
    "team_name": "Hack bytes",
    "members": [
      "Melisha priya Quadras",
      "Deekshitha Poojary",
      "Ancita Fernandes",
      "M vishal Kamath"
    ],
    "college": "St. Joseph Engineering College, Vamanjoor"
  },
  {
    "id": "HN-04",
    "team_name": "XL Coders",
    "members": [
      "Snehit Krishna Shastry G",
      "Sangeerth S",
      "Thanish P Shetty",
      "Athish Amin"
    ],
    "college": "Srinivas Institute of Technology (SIT), Mangalore"
  },
  {
    "id": "HN-05",
    "team_name": "Algnite",
    "members": [
      "Divya V",
      "Nishmith",
      "Pratham R Shetty",
      "Meghashree K"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-06",
    "team_name": "Webex",
    "members": [
      "Varshini",
      "Munazza Begam",
      "Swathi Prabhu",
      "Ashwin Shetty"
    ],
    "college": "P.A College of engineering , Mangalore"
  },
  {
    "id": "HN-07",
    "team_name": "Tech Titans",
    "members": [
      "SIDDHARTH",
      "PRAPTHI SALIAN",
      "Milu Mathew"
    ],
    "college": "NMAM Institute of Technology (NMAMIT), Nitte"
  },
  {
    "id": "HN-08",
    "team_name": "Binary brigade",
    "members": [
      "A Akshaya",
      "Jithesh Shetty",
      "Vinish Das",
      "Aditi S Naik"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-09",
    "team_name": "Tech Tonic",
    "members": [
      "Swathi N Pai",
      "Sharanya S Parol",
      "Gayatri Nair",
      "Harshitha Kini"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-10",
    "team_name": "Alt F4",
    "members": [
      "Aman Rao M",
      "B.Vibha",
      "Athmi Shetty",
      "Bimal P B"
    ],
    "college": "Srinivas Institute of technology manglore"
  },
  {
    "id": "HN-11",
    "team_name": "Git Committed",
    "members": [
      "Athul D Bhandary",
      "Nagavarapu Saarvari",
      "Samarth Shetty",
      "Rakshith N Poojary"
    ],
    "college": "NMAM Institute of Technology (NMAMIT), Nitte"
  },
  {
    "id": "HN-12",
    "team_name": "Dope",
    "members": [
      "Rohan Jaiswal",
      "Aditya Choudhary",
      "Akshat Choudhary"
    ],
    "college": "Dayananda Sagar University, Bengaluru, Karnataka"
  },
  {
    "id": "HN-13",
    "team_name": "Lost brothers",
    "members": [
      "Carl Pinto",
      "Loy D'Souza",
      "Ashwil Colaco"
    ],
    "college": "St Joseph's engineering College manglore"
  },
  {
    "id": "HN-14",
    "team_name": "Nexoria",
    "members": [
      "Ronith Joshi",
      "Shrivatsa V Bhat",
      "Sunith Nayak",
      "Prarthana Jain"
    ],
    "college": "Dr. Nitte Shankara Adyanthaya Memorial First Grade College, Nitte, Karnataka"
  },
  {
    "id": "HN-15",
    "team_name": "Team Gini",
    "members": [
      "Aryan Singh",
      "Keerthan",
      "Neelima Bhaktha",
      "Rishi Bhati"
    ],
    "college": "NMAM Institute of Technology (NMAMIT), Nitte"
  },
  {
    "id": "HN-16",
    "team_name": "Technogeeks",
    "members": [
      "Chirushi Bhut",
      "Pratheeksha H S",
      "Prathika",
      "Deeksha C Bhat"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-17",
    "team_name": "Geeks",
    "members": [
      "Aneesh Sanil",
      "NNM22CS055 DARSHINI U SHETTY",
      "Abhisha D Hegde",
      "NNM22CS098 MITHALI R SALIAN"
    ],
    "college": "NMAM Institute of Technology (NMAMIT), Nitte"
  },
  {
    "id": "HN-18",
    "team_name": "ERROR! Squad",
    "members": [
      "Darshan K S",
      "MITHUN J S",
      "Pradhin Shetty",
      "CHANDAN M N"
    ],
    "college": "Srinivas Institute of technology manglore"
  },
  {
    "id": "HN-19",
    "team_name": "Cultural coders",
    "members": [
      "Manish",
      "Nandan P Aghera",
      "Ananya J N"
    ],
    "college": "Vivekananda College of Engineering and Technology, Puttur"
  },
  {
    "id": "HN-20",
    "team_name": "Innovex",
    "members": [
      "Javeria Fathima",
      "Rifaaz Ahmed",
      "B B Sidrah",
      "RIFA ZAMZAM"
    ],
    "college": "Yenepoya institute of technology, moodbidri, karnataka"
  },
  {
    "id": "HN-21",
    "team_name": "Numeronauts",
    "members": [
      "Sujal M H",
      "Sujan Kumar",
      "Manik S H",
      "Vijeth Vijaya Shetty"
    ],
    "college": "Mangalore institute of technology and engineering"
  },
  {
    "id": "HN-22",
    "team_name": "QuadCore",
    "members": [
      "Nilesh Shetty",
      "Ghansyam",
      "Manoj Naik",
      "Abhishek"
    ],
    "college": "Srinivas Institute of Technology"
  },
  {
    "id": "HN-23",
    "team_name": "Celeste",
    "members": [
      "Thanu shri",
      "Anciya Grace Vaz",
      "Gayathri G",
      "Joyna Cutinha"
    ],
    "college": "St. Joseph Engineering College, Vamanjoor"
  },
  {
    "id": "HN-24",
    "team_name": "Byte Builders",
    "members": [
      "Mahammad Shahir",
      "Mohammad Shiyabudden",
      "Fathimath Zahida"
    ],
    "college": "Yenepoya institute of technology, moodbidri, karnataka"
  },
  {
    "id": "HN-25",
    "team_name": "Team EternalBlue",
    "members": [
      "Manas S",
      "Vivek Neeralagi",
      "Kushal SM",
      "Aravind Sagar"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-26",
    "team_name": "Code Titans",
    "members": [
      "Aditya V Kamath",
      "Adithya V Kotian",
      "Anuj Kulal",
      "Aneesh Rao"
    ],
    "college": "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Shankarapura, Karnataka"
  },
  {
    "id": "HN-27",
    "team_name": "NinjaX",
    "members": [
      "Babith Poojari",
      "Anudeep K K",
      "Bhat Nishanth Ganesh",
      "Kaushik K U"
    ],
    "college": "Sahyadri college of engineering and management manglore"
  },
  {
    "id": "HN-28",
    "team_name": "The Enginners Crew",
    "members": [
      "Muaz Ismail",
      "Anirudh Rao",
      "Praneeth C K",
      "Mariyam Heena"
    ],
    "college": "A. J. Institute of Engineering and Technology"
  },
  {
    "id": "HN-29",
    "team_name": "ARISE",
    "members": [
      "BHUSHAN POOJARY",
      "Tejas Nayak",
      "Swasthik Yesh",
      "Poornananda"
    ],
    "college": "Shri Madhwa Vadiraja Institute of Technology & Management"
  },
  {
    "id": "HN-30",
    "team_name": "Sigmoid",
    "members": [
      "Firas Ahmed Kola",
      "Yashas Shetty",
      "Vedika L Girap",
      "Omkar S Bhute"
    ],
    "college": "Mangalore Institute of Technology and Engineering"
  }
];

const TeamProfile = ({ team, qrUrl }: { team: TeamData; qrUrl: string }) => (
  <div className="p-4 sm:p-6 relative">
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#b4ff39]">{team.team_name}</h1>
        <p className="text-sm sm:text-lg text-gray-300 mt-2 flex items-center">
          <School className="h-5 w-5 mr-2 text-[#b4ff39]" />
          {team.college}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2A] p-6 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-6 w-6 text-[#b4ff39]" />
            <h2 className="text-xl font-semibold text-white">Team Members</h2>
          </div>
          <ul className="space-y-3">
            {team.members.map((member, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-[#3A3A3A] flex items-center justify-center text-[#b4ff39]">
                  {member.charAt(0)}
                </div>
                <span className="text-gray-300">{member}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#2A2A2A] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Team QR Code</h2>
          <div className="w-40 h-40 bg-white p-2 rounded-lg shadow-lg overflow-hidden">
            {qrUrl && (
              <img
                src={qrUrl}
                alt="Team QR Code"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <p className="text-sm text-gray-400 mt-4">Scan to view team profile</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TeamPage() {
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  const [qrUrl, setQrUrl] = useState<string>('');
  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id');
    const team = teams.find(t => t.id === teamId);

    if (team) {
      setSelectedTeam(team);
      setUserExists(true);
      QRCode.toDataURL(`${process.env.NEXT_PUBLIC_FRONTHOST}/viewteam?id=${team.id}`)
        .then(url => setQrUrl(url));
    } else {
      setUserExists(false);
    }
  }, []);

  if (!userExists) return <NoUserFound/>;
  if (!selectedTeam) return <SkeletonLoader/>;

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative">
      <CursorTrailCanvas className="pointer-events-none z-50 md:flex hidden fixed inset-0 h-full w-full" />
      <header className="bg-[#2A2A2A] shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-[#b4ff39] hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" /> 
            <span>Back to Teams</span>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2A2A] shadow rounded-lg overflow-hidden">
          <TeamProfile team={selectedTeam} qrUrl={qrUrl} />
        </div>
      </main>
    </div>
  );
}