int N;
m2: Console.WriteLine("Введите для точки М" + " координату по X ");
float x = float.Parse((Console.ReadLine())); Console.WriteLine(" Введите для точки М" + " координату по Y ");
float y = float.Parse((Console.ReadLine()));
if (((y > 0)&(x>0)) & ((y<5) & (x<5 )))
{
    N = 1;
}
else
{ N = 3; }

if ((x<0) & (y > 0))
{
    N = 4;
}
if (((x<0) & (y<0)) & (x>-5))
{
    N = 2;
}
if ((y<0) & (x<-5))
{
    N = 3;
}
if ((x>0) & (y < 0))
{
    N = 4;
}

Console.WriteLine('\t' + " РЕЗУЛЬТАТ:");
Console.WriteLine(" ТОЧКА М(" + x + ";" + y + ")"+ " лежит в области с N=" + N);
Console.WriteLine('\n' + " Для повторного ввода" + " нажать любую клавишу." + '\n' +" Для завершения программы нажмите Enter.");
