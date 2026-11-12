const tasks = [
  {
    "id": "2.1",
    "title": "Максимум двух чисел",
    "group": "Основные",
    "description": "Найти большее из двух чисел с помощью тернарного оператора.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите первое число: \");\n        double a = Convert.ToDouble(Console.ReadLine());\n\n        Console.Write(\"Введите второе число: \");\n        double b = Convert.ToDouble(Console.ReadLine());\n\n        double max = a > b ? a : b;\n        Console.WriteLine(\"Максимум: \" + max);\n    }\n}",
    "flow": [
      "Начало",
      "Ввести a и b",
      "Проверить: a > b?",
      "Да: max = a; нет: max = b",
      "Вывести max",
      "Конец"
    ],
    "tests": [
      [
        "5",
        "8",
        "8"
      ],
      [
        "10",
        "-2",
        "10"
      ],
      [
        "4",
        "4",
        "4"
      ]
    ]
  },
  {
    "id": "2.2",
    "title": "Максимум трёх чисел",
    "group": "Основные",
    "description": "Найти наибольшее из трёх чисел последовательными сравнениями, без Math.Max.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите три числа через пробел: \");\n        string[] parts = Console.ReadLine().Split();\n\n        double a = Convert.ToDouble(parts[0]);\n        double b = Convert.ToDouble(parts[1]);\n        double c = Convert.ToDouble(parts[2]);\n\n        double max = a;\n        if (b > max)\n            max = b;\n        if (c > max)\n            max = c;\n\n        Console.WriteLine(\"Максимум: \" + max);\n    }\n}",
    "flow": [
      "Начало",
      "Ввести a, b, c",
      "Присвоить max = a",
      "Если b > max, присвоить max = b",
      "Если c > max, присвоить max = c",
      "Вывести max",
      "Конец"
    ],
    "tests": [
      [
        "1 7 3",
        "7"
      ],
      [
        "-5 -2 -9",
        "-2"
      ],
      [
        "4 4 4",
        "4"
      ]
    ]
  },
  {
    "id": "2.3",
    "title": "FizzBuzz",
    "group": "Основные",
    "description": "Для чисел от 1 до 100 вывести Fizz при делимости на 3, Buzz — на 5, FizzBuzz — на оба числа.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        for (int i = 1; i <= 100; i++)\n        {\n            if (i % 15 == 0)\n                Console.WriteLine(\"FizzBuzz\");\n            else if (i % 3 == 0)\n                Console.WriteLine(\"Fizz\");\n            else if (i % 5 == 0)\n                Console.WriteLine(\"Buzz\");\n            else\n                Console.WriteLine(i);\n        }\n    }\n}",
    "flow": [
      "Начало",
      "i = 1",
      "Пока i <= 100",
      "Проверить делимость на 15",
      "Иначе проверить на 3",
      "Иначе проверить на 5",
      "Вывести соответствующий текст или i",
      "Увеличить i на 1 и повторить",
      "Конец"
    ],
    "tests": [
      [
        "3",
        "Fizz"
      ],
      [
        "5",
        "Buzz"
      ],
      [
        "15",
        "FizzBuzz"
      ],
      [
        "7",
        "7"
      ]
    ]
  },
  {
    "id": "2.4",
    "title": "Високосный год",
    "group": "Основные",
    "description": "Определить, является ли год високосным по григорианскому календарю.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите год: \");\n        int year = Convert.ToInt32(Console.ReadLine());\n\n        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)\n            Console.WriteLine(\"Год високосный\");\n        else\n            Console.WriteLine(\"Год не високосный\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести year",
      "Проверить: год делится на 400 или делится на 4, но не на 100?",
      "Да: високосный",
      "Нет: не високосный",
      "Конец"
    ],
    "tests": [
      [
        "2024",
        "Високосный"
      ],
      [
        "1900",
        "Не високосный"
      ],
      [
        "2000",
        "Високосный"
      ]
    ]
  },
  {
    "id": "2.5",
    "title": "Знак числа",
    "group": "Основные",
    "description": "Определить, положительное число, отрицательное или равно нулю.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите число: \");\n        double number = Convert.ToDouble(Console.ReadLine());\n\n        if (number > 0)\n            Console.WriteLine(\"Положительное\");\n        else if (number < 0)\n            Console.WriteLine(\"Отрицательное\");\n        else\n            Console.WriteLine(\"Ноль\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести число",
      "Число > 0? Если да — положительное",
      "Иначе число < 0? Если да — отрицательное",
      "Иначе — ноль",
      "Конец"
    ],
    "tests": [
      [
        "12",
        "Положительное"
      ],
      [
        "-3",
        "Отрицательное"
      ],
      [
        "0",
        "Ноль"
      ]
    ]
  },
  {
    "id": "2.6",
    "title": "Принадлежность диапазону",
    "group": "Основные",
    "description": "Проверить, входит ли x в закрытый диапазон [a, b].",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите x, a и b через пробел: \");\n        string[] parts = Console.ReadLine().Split();\n\n        double x = Convert.ToDouble(parts[0]);\n        double a = Convert.ToDouble(parts[1]);\n        double b = Convert.ToDouble(parts[2]);\n\n        if (x >= a && x <= b)\n            Console.WriteLine(\"Число входит в диапазон\");\n        else\n            Console.WriteLine(\"Число не входит в диапазон\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести x, a, b",
      "Проверить: x >= a и x <= b?",
      "Да: входит в диапазон",
      "Нет: не входит",
      "Конец"
    ],
    "tests": [
      [
        "5 1 10",
        "Входит"
      ],
      [
        "1 1 10",
        "Входит"
      ],
      [
        "11 1 10",
        "Не входит"
      ]
    ]
  },
  {
    "id": "2.7",
    "title": "Тип символа",
    "group": "Основные",
    "description": "Определить, является ли введённый символ буквой, цифрой или другим символом.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите один символ: \");\n        char symbol = Convert.ToChar(Console.ReadLine());\n\n        if (char.IsLetter(symbol))\n            Console.WriteLine(\"Буква\");\n        else if (char.IsDigit(symbol))\n            Console.WriteLine(\"Цифра\");\n        else\n            Console.WriteLine(\"Другой символ\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести символ",
      "Проверить char.IsLetter",
      "Иначе проверить char.IsDigit",
      "Иначе другой символ",
      "Вывести результат",
      "Конец"
    ],
    "tests": [
      [
        "A",
        "Буква"
      ],
      [
        "7",
        "Цифра"
      ],
      [
        "?",
        "Другой символ"
      ]
    ]
  },
  {
    "id": "2.8",
    "title": "Оценка по баллам",
    "group": "Основные",
    "description": "Преобразовать количество баллов в оценку по заданным диапазонам.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите количество баллов (0–100): \");\n        int score = Convert.ToInt32(Console.ReadLine());\n\n        if (score < 0 || score > 100)\n            Console.WriteLine(\"Некорректное количество баллов\");\n        else if (score >= 90)\n            Console.WriteLine(\"Оценка: 5\");\n        else if (score >= 75)\n            Console.WriteLine(\"Оценка: 4\");\n        else if (score >= 60)\n            Console.WriteLine(\"Оценка: 3\");\n        else\n            Console.WriteLine(\"Оценка: 2\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести score",
      "Проверить, что score от 0 до 100",
      "Если score >= 90: оценка 5",
      "Иначе если >= 75: оценка 4",
      "Иначе если >= 60: оценка 3",
      "Иначе: оценка 2",
      "Конец"
    ],
    "tests": [
      [
        "95",
        "5"
      ],
      [
        "80",
        "4"
      ],
      [
        "60",
        "3"
      ],
      [
        "40",
        "2"
      ],
      [
        "105",
        "Ошибка диапазона"
      ]
    ]
  },
  {
    "id": "2.9",
    "title": "Делимость на 3 и 5",
    "group": "Основные",
    "description": "Проверить, делится ли целое число одновременно на 3 и на 5.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите целое число: \");\n        int number = Convert.ToInt32(Console.ReadLine());\n\n        if (number % 3 == 0 && number % 5 == 0)\n            Console.WriteLine(\"Число делится и на 3, и на 5\");\n        else\n            Console.WriteLine(\"Число не делится одновременно на 3 и на 5\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести number",
      "Проверить number % 3 == 0 и number % 5 == 0",
      "Да: делится на оба числа",
      "Нет: не делится на оба одновременно",
      "Конец"
    ],
    "tests": [
      [
        "15",
        "Делится"
      ],
      [
        "30",
        "Делится"
      ],
      [
        "9",
        "Не делится"
      ],
      [
        "10",
        "Не делится"
      ]
    ]
  },
  {
    "id": "2.10",
    "title": "Существует ли треугольник",
    "group": "Основные",
    "description": "Проверить положительность сторон и выполнение трёх неравенств треугольника.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите три стороны через пробел: \");\n        string[] parts = Console.ReadLine().Split();\n\n        double a = Convert.ToDouble(parts[0]);\n        double b = Convert.ToDouble(parts[1]);\n        double c = Convert.ToDouble(parts[2]);\n\n        if (a > 0 && b > 0 && c > 0 &&\n            a + b > c && a + c > b && b + c > a)\n            Console.WriteLine(\"Треугольник существует\");\n        else\n            Console.WriteLine(\"Треугольник не существует\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести a, b, c",
      "Проверить, что все стороны положительны",
      "Проверить a+b>c, a+c>b и b+c>a",
      "Если все условия истинны — треугольник существует",
      "Иначе — не существует",
      "Конец"
    ],
    "tests": [
      [
        "3 4 5",
        "Существует"
      ],
      [
        "1 2 3",
        "Не существует"
      ],
      [
        "0 2 2",
        "Не существует"
      ]
    ]
  },
  {
    "id": "2.11",
    "title": "Калькулятор switch",
    "group": "Дополнительные",
    "description": "Выполнить +, -, * или / для двух чисел. При делении на ноль вывести error.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите первое число: \");\n        double a = Convert.ToDouble(Console.ReadLine());\n\n        Console.Write(\"Введите операцию (+, -, *, /): \");\n        string operation = Console.ReadLine();\n\n        Console.Write(\"Введите второе число: \");\n        double b = Convert.ToDouble(Console.ReadLine());\n\n        switch (operation)\n        {\n            case \"+\":\n                Console.WriteLine(a + b);\n                break;\n            case \"-\":\n                Console.WriteLine(a - b);\n                break;\n            case \"*\":\n                Console.WriteLine(a * b);\n                break;\n            case \"/\":\n                if (b == 0)\n                    Console.WriteLine(\"error\");\n                else\n                    Console.WriteLine(a / b);\n                break;\n            default:\n                Console.WriteLine(\"Неизвестная операция\");\n                break;\n        }\n    }\n}",
    "flow": [
      "Начало",
      "Ввести a, операцию и b",
      "Выбрать ветвь switch по операции",
      "Для / проверить b == 0",
      "Вывести результат или error",
      "Для неизвестной операции вывести сообщение",
      "Конец"
    ],
    "tests": [
      [
        "8 + 2",
        "10"
      ],
      [
        "8 / 2",
        "4"
      ],
      [
        "8 / 0",
        "error"
      ],
      [
        "8 * 2",
        "16"
      ]
    ]
  },
  {
    "id": "2.12",
    "title": "Максимум трёх чисел (тернарный оператор)",
    "group": "Дополнительные",
    "description": "Найти максимум трёх чисел, используя вложенные тернарные операторы.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите три числа через пробел: \");\n        string[] parts = Console.ReadLine().Split();\n\n        double a = Convert.ToDouble(parts[0]);\n        double b = Convert.ToDouble(parts[1]);\n        double c = Convert.ToDouble(parts[2]);\n\n        double max = (a > b)\n            ? ((a > c) ? a : c)\n            : ((b > c) ? b : c);\n\n        Console.WriteLine(\"Максимум: \" + max);\n    }\n}",
    "flow": [
      "Начало",
      "Ввести a, b, c",
      "Проверить a > b",
      "Если да: сравнить a и c; иначе сравнить b и c",
      "Выбрать наибольшее значение",
      "Вывести max",
      "Конец"
    ],
    "tests": [
      [
        "1 9 4",
        "9"
      ],
      [
        "8 3 10",
        "10"
      ],
      [
        "5 5 2",
        "5"
      ]
    ]
  },
  {
    "id": "2.13",
    "title": "Английская гласная",
    "group": "Дополнительные",
    "description": "Определить, является ли символ английской гласной (a, e, i, o, u), без учёта регистра.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите английскую букву: \");\n        char letter = Convert.ToChar(Console.ReadLine());\n\n        if (\"aeiouAEIOU\".Contains(letter))\n            Console.WriteLine(\"Гласная\");\n        else\n            Console.WriteLine(\"Не гласная\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести letter",
      "Проверить, содержится ли символ в строке aeiouAEIOU",
      "Да: гласная",
      "Нет: не гласная",
      "Конец"
    ],
    "tests": [
      [
        "a",
        "Гласная"
      ],
      [
        "E",
        "Гласная"
      ],
      [
        "b",
        "Не гласная"
      ],
      [
        "y",
        "Не гласная"
      ]
    ]
  },
  {
    "id": "2.14",
    "title": "Категория по знаку и чётности",
    "group": "Дополнительные",
    "description": "Для целого числа определить положительное/отрицательное и чётное/нечётное. Ноль обработать отдельно.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.Write(\"Введите целое число: \");\n        int number = Convert.ToInt32(Console.ReadLine());\n\n        if (number == 0)\n            Console.WriteLine(\"Ноль\");\n        else if (number > 0 && number % 2 == 0)\n            Console.WriteLine(\"Положительное чётное\");\n        else if (number > 0)\n            Console.WriteLine(\"Положительное нечётное\");\n        else if (number % 2 == 0)\n            Console.WriteLine(\"Отрицательное чётное\");\n        else\n            Console.WriteLine(\"Отрицательное нечётное\");\n    }\n}",
    "flow": [
      "Начало",
      "Ввести number",
      "Проверить number == 0",
      "Иначе определить знак number > 0",
      "Проверить чётность number % 2 == 0",
      "Вывести одну из четырёх категорий",
      "Конец"
    ],
    "tests": [
      [
        "8",
        "Положительное чётное"
      ],
      [
        "7",
        "Положительное нечётное"
      ],
      [
        "-4",
        "Отрицательное чётное"
      ],
      [
        "-3",
        "Отрицательное нечётное"
      ],
      [
        "0",
        "Ноль"
      ]
    ]
  }
];
