/*
STATES:

Enerjisiz - 0000
Vira Trolley - 0001
Bekleme - 0010
Vira - 0011
Mayna - 0100
Mayna - 0100
Trolley - 0101
Mayna Trolley - 0110
Mayna Trolley - 0110
Gantry - 0111
Gantry - 0111
Vira - 1000
Vira Trolley - 1001
Contact system administrator - 1111

5th bit, Yavaş 0
5th bit, Hızlı 1

6th bit, Boş 0
6th bit, Dolu 1

Enerjisiz                       000000    ->   0
Vira Trolley Boş Yavaş          000100    ->   4
Boşta Bekleme                   001000    ->   8
Vira Boş Yavaş                  001100    ->   12
Mayna Boş Yavaş                 010000    ->   16
Mayna Dolu Hızlı                010011    ->   19
Trolley Boş Yavaş               010100    ->   20
Mayna Trolley Boş Yavaş         011000    ->   24
Mayna Trolley Dolu Hızlı        011011    ->   27
Gantry Hızlı                    011111    ->   31
Gantry Yavaş                    011101    ->   29
Vira Dolu Hızlı                 100011    ->   35
Vira Trolley Dolu Hızlı         100111    ->   39
Contact system administrator.   111111    ->   63
   
*/