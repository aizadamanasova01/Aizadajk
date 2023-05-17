double x1, y1, z1, xz1, max, ma1, ma2, res1,res2, mi1, mi2,x2,y2,z2, finish;
int stepen = 2;

x1 = Math.Pow(8,stepen);
y1 = Math.Pow(7,stepen);
xz1 = 9;
/*ma1 = Math.Max(x1,y1);
ma2 = Math.Max(z1, xz1);
max = Math.Max(ma1,ma2);*/


if ((x1 > y1) & (x1 > xz1))
{
    ma1 = x1 + x1;
    Console.WriteLine("x наибольшее число-"+x1);

}

else if ((y1 > x1) & (y1 > xz1))
{
    ma1 = y1 + x1;
    Console.WriteLine("y наибольшее число-"+y1);
}

else //((xz1 > x1) & (xz1 > y1));
{
    ma1 = xz1 + x1;
    Console.WriteLine("xz наибольшее число-"+xz1);
}


res1 = ma1 + x1;
Console.WriteLine("\n",res1);

x2 = x1;
y2 = y1;

if ((x2 < y2)) 
{
    mi1 = x2;
    Console.WriteLine("x наименьшее число-" + x2);
}
else
{
    mi1 = y2;
    Console.WriteLine("y наименьшее число-" + y2);
}

mi1 = Math.Pow(mi1, stepen);
res2 = mi1 - y2;

finish = res1 / res2;


Console.WriteLine("Ответ: "+finish);