
import './App.css'


function App() { 


}
App()


vlan 10
 name administrasjon
exit
vlan 20
 name produksjon
exit
vlan 30
 name lager
exit
vlan 40
 name salg
exit
vlan 99
 name drift
exit
vlan 150
 name voice
exit

interface vlan 10
 ip address 192.168.10.1 255.255.255.0
 no shutdown
exit
interface vlan 20
 ip address 192.168.20.1 255.255.255.0
 no shutdown
exit
interface vlan 30
 ip address 192.168.30.1 255.255.255.0
 no shutdown
exit
interface vlan 40
 ip address 192.168.40.1 255.255.255.0
 no shutdown
exit
interface vlan 99
 ip address 192.168.99.1 255.255.255.0
 no shutdown
exit
interface vlan 150
 ip address 192.168.150.1 255.255.255.0
 no shutdown
exit


int vlan 10
ip helper-address 192.168.99.6
int vlan 20
ip helper-address 192.168.99.6
int vlan 30
ip helper-address 192.168.99.6
int vlan 40
ip helper-address 192.168.99.6
int vlan 99
ip helper-address 192.168.99.6
int vlan 150
ip helper-address 192.168.99.6
