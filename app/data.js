export const snippets = [
  {
    id: 1,
    term: "nmap",
    description:
      "Network Mapper - a free and open-source tool for network discovery and security auditing.",
    codeSnippet: "nmap [options] [target]",
    examples: [
      "nmap -sV -p 80 example.com  # Scan port 80 and detect service version",
      "nmap -A example.com  # Aggressive scan including OS detection",
      "nmap -Pn 192.168.1.1  # Skip ping check before scanning",
    ],
  },
  {
    id: 2,
    term: "hydra",
    description:
      "A fast and flexible login cracker supporting many network services.",
    codeSnippet: "hydra -l [username] -P [password-list] [protocol]://[target]",
    examples: [
      "hydra -l admin -P passwords.txt ssh://192.168.1.1",
      "hydra -L usernames.txt -P passwords.txt ftp://example.com",
      "hydra -s 8080 -l user -P wordlist.txt http-get://example.com/login",
    ],
  },
  {
    id: 3,
    term: "enum4linux",
    description:
      "A tool for enumerating information from Windows and Samba systems.",
    codeSnippet: "enum4linux [options] [target]",
    examples: [
      "enum4linux -a 192.168.1.10  # Perform all checks against target",
      "enum4linux -u user -p pass 192.168.1.10  # Use credentials for SMB enumeration",
    ],
  },
  {
    id: 4,
    term: "sqlmap",
    description: "An automated SQL injection and database takeover tool.",
    codeSnippet: "sqlmap -u [url] [options]",
    examples: [
      "sqlmap -u 'http://example.com?id=1' --dbs  # Enumerate databases",
      "sqlmap -u 'http://example.com?id=1' --dump  # Dump database contents",
      "sqlmap -u 'http://example.com?id=1' --batch  # Run with default options",
    ],
  },
  {
    id: 5,
    term: "crackmapexec",
    description:
      "A Swiss Army knife for pentesting networks with a focus on Active Directory.",
    codeSnippet: "crackmapexec [protocol] [target] [options]",
    examples: [
      "crackmapexec smb 192.168.1.0/24 -u user -p password",
      "crackmapexec ldap 192.168.1.10 -u admin -p pass --groups",
    ],
  },
  {
    id: 6,
    term: "john",
    description:
      "John the Ripper - a password cracking tool for various formats.",
    codeSnippet: "john [options] [password-file]",
    examples: [
      "john --wordlist=rockyou.txt hashes.txt  # Crack with a wordlist",
      "john --show hashes.txt  # Show cracked passwords",
      "john --incremental hashes.txt  # Incremental brute force",
    ],
  },
  {
    id: 7,
    term: "metasploit",
    description:
      "A modular penetration testing framework to exploit vulnerabilities.",
    codeSnippet: "msfconsole",
    examples: [
      "use exploit/multi/handler  # Load a payload handler",
      "set payload windows/meterpreter/reverse_tcp",
      "exploit  # Run the exploit",
    ],
  },
  {
    id: 8,
    term: "nc",
    description:
      "Netcat - a versatile networking utility for reading from and writing to network connections",
    codeSnippet: "nc [options] [hostname] [port]",
    examples: [
      "nc -l -p 1234  # Listen on port 1234",
      "nc example.com 80  # Connect to example.com on port 80",
      "nc -z -v example.com 20-30  # Scan ports 20 to 30 on example.com",
    ],
  },

  {
    id: 8,
    term: "dirb",
    description:
      "A simple web content scanner for discovering hidden files and directories.",
    codeSnippet: "dirb [url] [wordlist]",
    examples: [
      "dirb http://example.com /usr/share/wordlists/common.txt",
      "dirb http://example.com -X .php,.html  # Scan for specific file extensions",
    ],
  },
  {
    id: 9,
    term: "wfuzz",
    description:
      "A web application bruteforcer to discover hidden resources or fuzz parameters.",
    codeSnippet: "wfuzz [options] [url]",
    examples: [
      "wfuzz -c -z file,/usr/share/wordlists/common.txt http://example.com/FUZZ",
      "wfuzz -c -z range,1-100 -u http://example.com/page?id=FUZZ",
    ],
  },
  {
    id: 10,
    term: "gobuster",
    description: "A tool for brute-forcing URLs and DNS subdomains.",
    codeSnippet: "gobuster [mode] [options]",
    examples: [
      "gobuster dir -u http://example.com -w /usr/share/wordlists/dirb/common.txt",
      "gobuster dns -d example.com -w /usr/share/wordlists/subdomains.txt",
    ],
  },
  {
    id: 11,
    term: "hashcat",
    description:
      "A fast and advanced password recovery tool using GPU acceleration.",
    codeSnippet: "hashcat [options] [hash-file] [wordlist]",
    examples: [
      "hashcat -m 0 -a 0 hashes.txt rockyou.txt  # MD5 hash with wordlist",
      "hashcat -m 1000 -a 3 hashes.txt ?a?a?a?a?a  # NTLM hash with mask attack",
    ],
  },
  {
    id: 12,
    term: "aircrack-ng",
    description: "A suite of tools for assessing Wi-Fi network security.",
    codeSnippet: "aircrack-ng [options] [capture-file]",
    examples: [
      "aircrack-ng -b [target-BSSID] capture.cap  # Crack WEP or WPA handshake",
      "airmon-ng start wlan0  # Enable monitor mode",
    ],
  },
  {
    id: 13,
    term: "nikto",
    description:
      "A web server scanner that detects vulnerabilities and misconfigurations.",
    codeSnippet: "nikto -h [target]",
    examples: [
      "nikto -h http://example.com",
      "nikto -h http://example.com -output report.html  # Generate HTML report",
    ],
  },
  {
    id: 14,
    term: "responder",
    description:
      "A tool for attacking Windows authentication over LLMNR, NBT-NS, and MDNS.",
    codeSnippet: "responder [options]",
    examples: [
      "responder -I eth0  # Listen on eth0 for authentication requests",
      "responder -rdw  # Enable rogue DHCP server and WPAD attacks",
    ],
  },
];
