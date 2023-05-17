float a;	
float c;	
double i;	
bool l;	
string name; 
Console.WriteLine("Input фамилию ");
name = Console.ReadLine();
Console.WriteLine("Input a");
a = Convert.ToSingle(Console.ReadLine());
Console.WriteLine("Input c");
c = Convert.ToSingle(Console.ReadLine());
Console.WriteLine("Input i");
i = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("Input l");
l = Convert.ToBoolean(Console.ReadLine());
System.Console.WriteLine(" Результаты форматирования \n name = {0, 6}, l = {1, 4}", name, l);
System.Console.WriteLine("a ={0, 4}, c = {1,10:f5}, i = {2,20:e8}", a, c, i);
System.Console.WriteLine(" ");
System.Console.WriteLine("^fl выхода нажмите на Enter");
System.Console.ReadLine();


