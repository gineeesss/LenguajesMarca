'''
PROGRAMA Paquetería

CONSTANTES
'''
MAX_CALLES = 5
MAX_VIVIENDAS = 10
'''
TIPOS 
    registro Calle
        nombre_calle : str
        total_viviendas : int
    fin_registro

    registro Vivienda
        numero : int
        planta : int
        puerta : str
    fin_registro

VARIABLES
    calles[MAX_CALLES] : Calle
    viviendas[MAX_VIVIENDAS][MAX_CALLES] : Vivienda
    opcion, i : int
    existente : bool

'''
#Inicialización de tipos

class Calle : 
    def __init__(self,numerViviendas):
        self.nombre_calle = ""
        self.total_viviendas = 0
        self.viviendas_asociadas = Vivienda()  
        self.viviendas = [Vivienda() for _ in range (numerViviendas)]

class Vivienda : 
    def __init__(self):
        self.numero = [0] * MAX_VIVIENDAS
        self.planta = [0] * MAX_VIVIENDAS
        self.puerta = [""] * MAX_VIVIENDAS
    

#Inicialización de variables y EEDD
calles = [Calle() for _ in range (MAX_CALLES)]  #array de las calles 
 


#Inicio

while True:
    print("1. Registrar calle.")
    print("2. Mostrar todos los datos.")
    print("3. Mostrar viviendas de una calle y número.")
    print("4. Salir del programa.")

    while True:
        try:
            opcion = int (input(f"Por favor, seleccione una opcion: "))
        except ValueError:
            print("Error, introduzca un entero.")
            continue
        break

    if (opcion == 1):
        calle = str (input(f"Por favor, introduzca el nombre de la calle: "))
        
        #comprobamos si la calle ya esta registrada
        existente = False
        for i in range (MAX_CALLES):
            if ( calle == calles[i]):
                #aqui se actualizan los valores que tuviera la calle (?)
                existente = True


                continue
            

        if (existente == False and Calle.total_viviendas < MAX_VIVIENDAS):
        #aqui añadimos la nueva calle y sus datos
            for i in range (MAX_CALLES):
                if (calles[i].nombre_calle == ""): #esto es para registrar la nueva en un hueco vacio(?)
                    calles[i].nombre_calle = calle
                    while True:
                        try:
                            calles[i].total_viviendas = int (input(f"Introduce el numero de viviendas de la calle {i+1}: "))
                        except ValueError:
                            print("Error, introduzca un entero.")
                            continue
                        if (calles[i].total_viviendas <  MAX_VIVIENDAS):
                            for j in range (calles[i].total_viviendas):
                                while True:
                                    try:
                                        calles[i].viviendas_asociadas.numero[j] = int(input(f"numero de la casa {j}, en la calle {i}"))
                                        break
                                    except ValueError:
                                        print("Error, introduzca un entero.")
                                        continue

                                while True:
                                    try:
                                        calles[i].viviendas_asociadas.planta[j] = int(input(f"planta de la casa {j}, en la calle {i}"))
                                        break
                                    except ValueError:
                                        print("Error, introduzca un entero.")
                                        continue      

                                calles[i].viviendas_asociadas.puerta[j] = input(f"puerta de la casa {j}, en la calle {i}")

                                break
                        else:
                            print(f" Error: no se pueden añadir más de {MAX_VIVIENDAS} viviendas")
                        
                    

                                    
                
            

            else:
                print(" Error: no se puede añadir una nueva calle")


        
        



    elif (opcion == 2):



    elif (opcion == 3):

    

    elif (opcion == 4):
        exit()

    else:
        print("Por favor, introduzca opcion del 1 al 4.")

#Fin
