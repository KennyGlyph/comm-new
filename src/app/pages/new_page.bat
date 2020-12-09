@echo OFF
SETLOCAL ENABLEDELAYEDEXPANSION
set /p pageName="Page Name: "
SET pageName
CALL :LCase pageName lowName

if not exist %lowName% (
    mkdir %lowName%
    
    echo import { NgModule } from '@angular/core'; > .\%lowName%\%lowName%.module.ts
    echo import { BrowserModule } from '@angular/platform-browser'; >> .\%lowName%\%lowName%.module.ts
    echo import { %pageName%Component } from './%lowName%.component'; >> .\%lowName%\%lowName%.module.ts
    echo. >> .\%lowName%\%lowName%.module.ts
    echo @NgModule({ >> .\%lowName%\%lowName%.module.ts
    echo   declarations: [ >> .\%lowName%\%lowName%.module.ts
    echo     %pageName%Component >> .\%lowName%\%lowName%.module.ts
    echo   ], >> .\%lowName%\%lowName%.module.ts
    echo   imports: [ >> .\%lowName%\%lowName%.module.ts
    echo     BrowserModule >> .\%lowName%\%lowName%.module.ts
    echo   ], >> .\%lowName%\%lowName%.module.ts
    echo   providers: [], >> .\%lowName%\%lowName%.module.ts
    echo   bootstrap: [%pageName%Component] >> .\%lowName%\%lowName%.module.ts
    echo ^}^) >> .\%lowName%\%lowName%.module.ts
    echo export class %pageName%Module ^{ ^} >> .\%lowName%\%lowName%.module.ts
    
    echo import { Component } from '@angular/core'; > .\%lowName%\%lowName%.component.ts
    echo. >> .\%lowName%\%lowName%.component.ts
    echo @Component({ >> .\%lowName%\%lowName%.component.ts
    echo   selector: 'app-root', >> .\%lowName%\%lowName%.component.ts
    echo   templateUrl: './%lowName%.component.html', >> .\%lowName%\%lowName%.component.ts
    echo   styleUrls: [ >> .\%lowName%\%lowName%.component.ts
    echo     './%lowName%.component.scss' >> .\%lowName%\%lowName%.component.ts
    echo   ] >> .\%lowName%\%lowName%.component.ts
    echo ^}^) >> .\%lowName%\%lowName%.component.ts
    echo. >> .\%lowName%\%lowName%.component.ts
    echo export class %pageName%Component ^{ ^} >> .\%lowName%\%lowName%.component.ts
    
    echo ^<h1^>%pageName%^</h1^> > .\%lowName%\%lowName%.component.html
    echo.> .\%lowName%\%lowName%.component.scss
) else (
    echo "Folder already exists..."
)
ENDLOCAL
GOTO:EOF

:LCase
:UCase
:: Converts to upper/lower case variable contents
:: Syntax: CALL :UCase _VAR1 _VAR2
:: Syntax: CALL :LCase _VAR1 _VAR2
:: _VAR1 = Variable NAME whose VALUE is to be converted to upper/lower case
:: _VAR2 = NAME of variable to hold the converted value
:: Note: Use variable NAMES in the CALL, not values (pass "by reference")

SET _UCase=A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
SET _LCase=a b c d e f g h i j k l m n o p q r s t u v w x y z
SET _Lib_UCase_Tmp=!%1!
IF /I "%0"==":UCase" SET _Abet=%_UCase%
IF /I "%0"==":LCase" SET _Abet=%_LCase%
FOR %%Z IN (%_Abet%) DO SET _Lib_UCase_Tmp=!_Lib_UCase_Tmp:%%Z=%%Z!
SET %2=%_Lib_UCase_Tmp%
GOTO:EOF