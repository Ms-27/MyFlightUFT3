' Tente de se connecter avec les valeurs dans la datatable
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("AgentName", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("Passwrd", dtGlobalSheet) @@ hightlight id_;_1881255808_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2060111416_;_script infofile_;_ZIP::ssf21.xml_;_
 @@ hightlight id_;_1929428384_;_script infofile_;_ZIP::ssf36.xml_;_
' Vérifie si un prompt d'erreur est affiché et fait un report adapté
'' Test l'affichage du prompt avec un timeout de 0
If WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Exist(0) Then
	'' Renvoi un Problème de connexion
	Reporter.ReportEvent micFail, "Problème de connexion", "Erreur dans le login et/ou mdp"
	'' Valide avec OK
    WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click
'' Renvoi une connexion réussie
Else Reporter.ReportEvent micPass, "Connexion réussie", "Couple login/mdp correct"
End If

'Vérifie l'affichage d'une offre dans un temps donné (25000ms)
WpfWindow("Micro Focus MyFlight Sample").WpfObject("London to Paris,  all").WaitProperty "devname", "London to Paris,all inclusive", 25000 @@ hightlight id_;_1925630608_;_script infofile_;_ZIP::ssf39.xml_;_

' Ferme la fenêtre de l'application
WpfWindow("Micro Focus MyFlight Sample").Close
