#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>


// Structures

typedef enum {

    JS_STRING,
    JS_NUMBER,
    JS_OBJECT,
    JS_ARRAY,
    JS_FUNCTION,
    JS_BOOLEAN,
    JS_UNDEFINED

}JSValueType;

typedef struct JSValue
{
     JSValueType type;

     union 
     {
        char* stringValue;
        double numberValue;
        struct JSOBject* objectValue;
        struct JSArray* arrayValue;
        void(*functionValue)();
        bool booleanValue;

     };

}JSValue;


typedef struct JSProperty{

    char* key;
    JSValue value;

}JSProperty;


typedef struct {

	char** keys;
    int* offsets; 
    int keyCount;

}HiddenClass;


typedef struct JSOBject {

    JSProperty* properties;
    size_t propertyCount; 
    struct JSOBject* prototype;
	HiddenClass* shape;


}JSOBject;


// Function Prototypes
JSOBject* createObject(void);
JSValue* getProperty(JSOBject* obj, const char* key);
void execute(JSOBject* obj, const char* key);
JSOBject* createObjectPrototype(void);
void greet(void);
void objectToString(void);
void addProperty(JSOBject* obj, const char* key, JSValue value);


int main(){

    JSOBject* object = createObjectPrototype();
    JSOBject* person = createObject();

	person->prototype = object;

	JSValue val;

    val.type = JS_STRING;
    val.stringValue = strdup("Alice");
    addProperty(person, "name", val);

    val.type = JS_NUMBER;
    val.numberValue = 20;
    addProperty(person, "age", val);

    val.type = JS_BOOLEAN;
    val.booleanValue = 0;
    addProperty(person, "isStudent", val);

    val.type = JS_FUNCTION;
    val.functionValue = greet;
    addProperty(person, "greet", val);


	val.type = JS_FUNCTION;
	val.functionValue = objectToString;
	addProperty(object,"toString", val);
  
    execute(person, "name");
    execute(person, "age");
    execute(person, "isStudent");
    execute(person, "greet");
    execute(person, "toString");


	free(object);
	free(person);

    return 0;

}

//Functions

void greet(){

	printf("Hello World!");

}

void objectToString(){

	printf("[object Object]");

}



JSOBject* createObjectPrototype(){

    JSOBject* prototype = createObject();
	prototype->prototype = NULL;


    return prototype;
}


JSOBject* createObject() {

    JSOBject* obj = malloc(sizeof(JSOBject));
    obj->properties = NULL;
    obj->propertyCount = 0;
 

    obj->shape = malloc(sizeof(HiddenClass));
    obj->shape->keys = NULL;
    obj->shape->offsets = NULL;
    obj->shape->keyCount = 0;

	return obj;
}

void execute(JSOBject* obj, const char* key) {

    JSValue* val = getProperty(obj, key);
    if(!val) return;

    switch(val->type) {
        case JS_STRING:
            printf("%s: %s\n", key, val->stringValue);
            break;

        case JS_NUMBER:
            printf("%s: %.2f\n", key, val->numberValue);
            break;

        case JS_BOOLEAN:
            printf("%s: %s", key, val->booleanValue ? "true" : "false");
            break;

        case JS_FUNCTION:
            printf("\n%s -> ", key);
            val->functionValue();
            break;

        default:
            printf("%s: [type not found]\n", key);
    }
}


JSValue* getProperty(JSOBject* obj, const char* key) {

    for(int i = 0; i < obj->shape->keyCount; i++) {
        if(strcmp(obj->shape->keys[i], key) == 0) {
            return &obj->properties[obj->shape->offsets[i]].value;
        }
    }
    if(obj->prototype) {
        return getProperty(obj->prototype, key);
    }
    return NULL;
}





void addProperty(JSOBject* obj, const char* key, JSValue value) {

    int index = obj->propertyCount;
    obj->propertyCount++;
    obj->properties = realloc(obj->properties, sizeof(JSProperty) * (obj->propertyCount));
    obj->properties[index].key = strdup(key);
    obj->properties[index].value = value;

    obj->shape->keys = realloc(obj->shape->keys, sizeof(char*) * obj->propertyCount);
    obj->shape->offsets = realloc(obj->shape->offsets, sizeof(int) * obj->propertyCount);

    obj->shape->keys[index] = strdup(key);
    obj->shape->offsets[index] = index;
    obj->shape->keyCount = obj->propertyCount;

}
