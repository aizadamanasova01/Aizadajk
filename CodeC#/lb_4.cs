using System;
double g, pi, x, y, s, a, p, d, chl, zn;
int n, k;
m1: Console.WriteLine("Введите значение угла");
g = double.Parse(Console.ReadLine());
pi = Math.PI;
x = g * pi / 180;
Console.WriteLine("\n" + "Промежуточные результаты" + "\n");
k = 0;
s = 0;
p = 1;
n = 3;
d = 1;
a = x;


do
{
    s += a;
    chl = x * x * x * d;
    p = -p * (n - 1) * n;
    chl = p;
    zn = p;
    a = chl / zn;
    d = x * x;
    n += 2;
    k++;
     Console.WriteLine("\n" + "итераципя №" + k + "\n" + "a=" + a + "s=" + s + "\n");

    // Console.WriteLine("True");
}


while (Math.Abs(a)>=0.000001);


y = Math.Sin(x);
Console.WriteLine("\n" + "Результаты: " + "\n" + "Заданное значение угла  в градуса.=" + g + "\n" + "Вычесленная сумма ряда s=" + s + "\n" + "Количество членов ряда -" + k + "\n" + "Функция деленгие SIN(X)=" + y + "\n");
Console.WriteLine("\n" + "Для завершение программы нажмите Enter "+"\n");
string Rep = Console.ReadLine();
if (Rep != "") goto m1;
//Hui