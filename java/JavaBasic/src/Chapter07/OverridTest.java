package Chapter07;
class Point{
    int x;
    int y;
    String getLocation(){
      return "x:" + x + ", y:" + y;
    }
}

class Point3D extends Point{
    int z;
    //조상의 함수를 오버라이딩
    String getLocation(){
        return "x:" + x +  ", y:" + y +  ", z:" + z;
    }
}
public class OverridTest {
    public static void main(String[] args) {
        Point3D p = new Point3D();
        p.x = 3;
        p.y = 5;
        p.z = 7;
    }
}
