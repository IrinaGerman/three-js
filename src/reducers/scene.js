export default function scene (state = '', action) {
	if (action.type === 'SCENE') {
		return action.payload;
	} if (action.type === 'DEL_MESHES') {
		const scene = action.payload;
		
		for (var i = scene.children.length - 1; i >= 0; i-- ) {
			if (scene.children[i].type === "Mesh") {			
				scene.remove(scene.children[i]);
			}
		}
 		
		return scene;      	
	}
	return state;
}
