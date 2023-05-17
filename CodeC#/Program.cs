int N;
m2: Console.WriteLine("Введите для точки М"+
" координату по X ");
float x = float.Parse((Console.ReadLine())); Console.WriteLine(" Введите для точки М" + " координату по Y ");
float y = float.Parse((Console.ReadLine()));
if (y > 0) 
{
if (x * x + y * y < 16)
{
if (x >= 0) N = 2;
else N = 1;
}

else
{ N = 3; }
}
else
{ N = 4; }
Console.WriteLine('\t' + " РЕЗУЛЬТАТ:");
Console.WriteLine(" ТОЧКА М("+ x + ";" + y + ")"
+ " лежит в области с N=" + N);
Console.WriteLine('\n' +" Для повторного ввода" + " нажать любую клавишу."+'\n'+
" Для завершения программы нажмите Enter.");
string p = Console.ReadLine();
if (p != "") goto m2;
