// DB CONNECTION
require('./config/db.connection.js')

const { Profile } = require('./models/index.js')
// REQUIRING
const Class = require('./models/Class');
const Coach = require('./models/Coach');
const Fighter = require('./models/Fighter');
const Shop = require('./models/Shop')

Shop.create(
    {
        name: "CFT Hoodie",
        price: "35.00",
        image: "data:image/jpeg;base64,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"
      },
      {
        name: "CFT T-Shirt",
        price: "25.00",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADqCAMAAAAGRyD0AAABIFBMVEX/AAD///8AAADtAADzAADvAAD2AADyAAD6AAD5AADoAACpAADrAADnAADkAADhAADTAADGAAC5AADbAACvAACOAADt7e3OAAChAABiAADAAACVAAA3AACEAAB9AAB1AAAyAAA9AAAtAABNAABoAAD29vYpAAAlAAAUAABfAACAAABVAABFAAAdAABPAABIAACCgoJnZ2dtAADPz89NTU0nJyfAwMAbAADl5eWgoKBRUVFbW1vMzMxAQECsrKx3d3eUlJQ0NDQbGxukpKSJiYkTLCwABgYAHx9oFRWgFRUVFRW/FBS/NzeyVlanbm6/oaHISEguHh4/JSW8aWm1QECyoKBIOjqeMDBuT0+iZ2c0RkYvFBTMu7u6goLCcXHLZGRtZTjjAAAdCElEQVR4nM2deUPjOpLAjWL5ICGnQ0wOkkAgCQnQTTdHX0Dzenp237ydt9fs7uwx8/2/xap0+0rsxMHUP01DbOsXSaWqUqls7OUtd8+PZ7nfNLMY+d7u7AcC+XGY/cp8G5Iv1zMS8v5Dlus+PP2K3mf/LlZInlx3SJeXTw/pLnt4vmVXfMqxLflx3X1nrRsptG/P69AeHp9e1Oe/p/wmUkheXI+catY0eoFu+/J89xCdO2dnH+4+PX1HYfmRU3Py4Tp8/pW3q20QuUTLSbC5L98+v396x+T9l4/fXsI8CPkz9u8veTQoF66v72XjWoBlNBCq4OY82vYV4hvGgP/4nIdq3Jbr4Vn77gcGkwVaWLa1X06DNh50yfcwh8s64ndPmZTpDrjuPqsG9u7RDefaJ9+/WcK2Vem2F4lEs8XQ7x6YFj5BJ+y6rvzb91+27LQtuLTxh0Zl2/URKnEwjwxJXCqVMDYtt1RvdD3f7w2Gk8mg3fPLXrPRqR+4lmXamMgY3ZvsMtJhl/KW778WwfX1SfvmJw3awhlTGyBzNLIBrEThsE3ENE1CYprwM+DwP1qnCO3zq4akx2tteduf7zYfjxtxBaD6/oFFG2mWVYcZ52hiCbAVgs0jhGr8mhpCFvw7+IO8+cvaFTAvrsM7bfihabtuyY4xL9Gx4KogtGipPyVRlRZCiRKZoDL7weq01er+Pa3dsgXXh+dv+swfdGxTa7nd1BpZJ3+/9lsujNBYJqJWcPleu6KDLg0l2nhE37JrkdRcZx9++aIzTQcd1wy12Jqja1c0rEE/dnnstUoWm1VcTDrT9js+XQYkljVCDSMgnaF63MeMzk8qrrO7d4F+QuN23Q5DQR9U6QJrhLT2/ekx0YJNKl653Ou1bxZj/rea/HgbHRkRaWiGSyYFuZ7r7PFjgAnNyzUrBop2GOmkegBsOJmheIHfn2DVOVxphMVpqhXw53NqX2Yd1+G7QGP6F91KkjbA0C4fnUudCENxaTstf3I9utSAzpdXQ69FmruQg9bAl6gbhwVieqfy4i8pO20N17PGNBt6NTJRVkCBDIgNJVvUIpc1HcsiX0WlckBlv0I+6xjevTK7oFfm+v+iUvLPRTNuH7fmergVA4AwUdUWy0QbKmWIhgrMvEbotE5WMqyJaTZPEDqvG/pFV6uw6Hc0kN9wCpt/FdcDh/rjPzRx8lIUgAKZoGM1vqg3Nm+QCcnENq2qT6g0/UI/dBK6Sax05VRb22cruDjWyT9WM0BFwaqgzke9Ro18vNXwBku4aS9wWQ/d4/BN4uXggoOtc61XcNFBOGtmhGJgE1v7b7Ud1IljL3hdG81SYhFxhTv+vCEXNZemB3Yi1IqHD9G4Fmh7p33Cm7Pwq8HPmhNd3acRn93p80Zcj3Dp5f4a7ZckA9CDwV85ra7XqEU+2TpBi0xURCxmiNyuMEGSuM7olfW43loLBUJs+5vS+o85PaScmwzCXOvv2bmoJ1I2o1RpoEDA7i2v+bDTIOZUZwMs0mXUEHuflesDXHVqRbHSqGMm7jFRg94KMqdDNKWuObPJcqW+T+CicYt6zOTK8uTWFVE8fvwljumRJfu6FfvHVOJQJZs0xeK5aHcNY7orm+IyWmCOz71qsJcdt9q8AdVYT7gsndSgke8ycdHZVYvproxcxLDrTWHFuih3WrbjOK5Z63gDmBuzdnX91ault6LDYrmoMryJ6a6Svf5pEWn1+igk494WA1AJOAkJmxWxXHeh2aUsDnOzBpid8vFieT49758etb1WeuWzWjxYxDJwgcPfV93lGtaWXDsSB77/eEMxjosOQ5+uXeDtE00s+yvt6vVKMky0E+O46DBsAIvp9VoEy8m8Kr+SNBKNjjguavF2CJcNFmZd667SxqvoloITpiS0NDbmEcdFN7OOyZyyrqg1pQVu85rxGcVJWmCGSTZHDNcHpouruGQTW5tYQ0cqslkQl5v05F6SkRjD9YlxDS28D1Zpl7jMFQH2yjxCrARNjGlLU3KJ+HvdrtKNhKZmUr02EBczwdI5pg2N23WJ4RJBqKXVQjO4+kjZVK+LI8WOf3SNNTTO5Ijhgo/S7YxeA43J1S65vGcWzqUmGLEz2Q9zNPATAgJRrq+AdIAYHeys2kQtClesGCy60Iils3Z0fn5D7dQGmhqlhAkW5YKkipHLYyM9cnnJPEbTYvsLKxPOohHxIfnJuYS19SR+gkW4npktbxMbfDqfgdkNy/OshDdyU3LkYs9uteqNSmUM20s9GvqGgGJM/DfMxRavOsYtojgMGMfuW+Jy2ZZmlyC10AlYP834FSzM9U3YvCa5wIN7mG+Ei84Bj4V5qmjpjOkkMUAT/LqWSwsAWD7by8Ils4fOrc3c5by5rhBtAkbnN2zyMxMx6jSHuGgAgFsXEDEmYKTrLoQ3tom7nBsXmRQmXXigv+iwMhgqQtFNsRDXC/nQRBoXBKxLfBTrCF29Da4OSzhwWIyeZQ8MYlfmINchfLwtoqE0Et42bbOPhmah7rLNfSSfTnkbQoejAecqk/88reF6CHFBBGHcqcnfFc11A/odU2Oo4nGuTqxvGeSitkaPB+XpDGXZCsi3C+Uyua/eR46B+6g9R23ST4wL5trPNVw/ZARAQtToxm7TLjQMwBS0YZMl1RyTOQb9JrisWIUY4GKJxyKqxiDM0g2PChTPVSde/DXkKp4ik3B57I/3cUEpnYvtDfliejGjuYSdC551VxyXyx7uoaMxGpH/T89BX/DECIi63q3iolt513JviF5E1LxJNKlVKpTLYfOCbi6XYFk+0rjmcQpR56L5Twc4wjVEyH0TXEAAOVQ1sHgl1yBugulcP5FyIAUXASJDelxwfxns4ZfcdmqCypBcEM2OmL4a15muDEs8Vghc99IEKZiLzBL6vx70muRyqVq4S+SiNm9HcWHORa7j5kbBXAciqWwCmbOSi1mLt4lcX5nnJblKjAtjhAZFc0Gr3A7x+6mMkAFcMl2xFY1KaVx09apFufbVrCuUy+ryDEWXDkeNCyJmoSMgYS61O8RC4ozLswvmgucT95Z5XB0a3tC5vEhUSuOCOO9UcvEdhjfCBeOFuLcepwDPS+dqRCaYxgUZlHNL0xkgjIubh8Vt60GzzDbXFMeUqB3i+jWJC9JdB+F4mvOGuAY8yblP0/R1ruaq/oLp5YX9kTfCBfaONUE0hcBC5/CPzgXRzi8JXA+amlfziHF1uZYsKg7AuOboAH6us9NHbS1Duh2xOBTXL+RvPJymbUu+ES4wEK1TdkykzNSizlVewQXTaxEJwxOug7fC1Uf0+UM2AHUu0Bsv8VzUOuTrrx4mJDCESw8NFCLANWIZ9mMWQzzWuNyISS+57jTr0Azc0FV6o1iuKeXC1LOEbtPSq67Clq/kgl1KHtUN7PqT+70RLvuemocNnmkf4CqHFaLk0oZhKXhDaybtjaL2iaAZuMTM3h5q0t8MtbMtcPIxOBAFFx2GPIqBgzckXOW3wFUlXI5DnOYK/c0Q6QlxECp9jOGCwPzYjFl96XztmW+EC5sGn17B/qID8XMMlx7oDaRK4JI1luZVoVwtNHJLdp0a8wb4Jnp/4dBA5FwBXzlwQ8K1kP5ywVx9C5wVHjYMcoUHIueCQO+9Gbf4YohHyRzLgvJtoBmMi3zJfPiFuEIDkXNBzsZxrFNMua7fAleHcOGKPIR5FDwHVwkORMZFbV5hVATbboN/cC+4ispnA64G4bKbYnqFuUIDkXH9osXlQ2uvDX6qiIsWGeAgSH2L+Cp8ehkLFPySg74K4/oY5yozMUu2p8I5RXMRtXfAfxPmqgYGIuWiNq9ce4NghKurVGVhjiVRZ2XUd7oi1BblMs51G9GQxoaKsAXArBKuq7lXmKPCuIgRL0+0z8NcgVxEQxgbfe2MjQ5mgWEW3MMsQmiYrW9MuXFogJ4IKWcaHQ1w3WoRm3DzLRrwvTDfAteYuLiyBf0wFz0mcKdxMS0fOLWh2k80oT1SR4teiyMsNMw27mrHZqNcA20jDLjofl6oOoEWQIQ1flq0IUXDbEtfO0Yb5epoAxG43mtaXgn/MMtLgSzmQg0Our249DTb6WQWaYu2/WBwW96PnDjkPcY3LLlrVpTBwVrRd2tqgqAo11BtPxjBwKEuprxjT+33FbQws1EztrCaCLNZ5FNdFfY1eOAw7oAoTwigxx68YiO+Dg2LXlmaQpvdRz+GZMqDwabXJO6wF2MoUUOq4IWZaa8AF09tCwhsrH8SXPHTS+fqqnFY0AJmRbicOC7YB/vGuR5C28phxVGihpTcT38tkqBAAus1rKKruUrS9jWYcRhzrlzMJOqBywhiQVzk6XYfFiONK+6Y+lKYHAYNAYwj00sdTGJla6S1X8wCBoe2TkALyPntsF2VkPjC9jWo73VhhrA0tQfK4l4lJRaj6AkXnqXgqgmTw9gL+F5c3OAtrZFSmMUo+hLlujEVl4smcR+85CaHcRizKocCiKCKZDpYMQqxJNJI1nENuMlh0MihmYwFXOYxQrJHd0wQK06UqxrPJbJiDVCH/YDaCJmANjOkakUqeotxkUkup0FVec660KO/h4QLrKih3l9hxWCzhVn6Z0VYvmaU60AG3IJyxMJtxnPI2ojMH5PXJ7MTuF9DQB3Wglz1hHokHgu3GZCN0tS4IusT9KU1k9HgQizEEjMOyHe7luuAaXrK1VLqMNpqmhJyoy3du2t+ogBXh3LJ0VIPVqCSgu+ppjfAmi+tOqAMPHZZCxTsrvlJ4nAuT+NqiCKQuthdSB6Hs/UGmBttWfkqZnUCLrB868UpDtqEbpjLC37IwU0GReTjnsFqOV+VDyw7XinQ8UcsKWmTvL7FQbP0mLMkG9jVuRzc8aHG2ezGq7EwovEiGI+athnXF3TLgajP4+IsDvrNNsNcPELqmLzy5ZIXKwHAB+MnQoseK4w88+NKQzGustx9LmCCUS6PeomygR5qGI5j1hkTGjblMIIoxx2EBJqWhbtDKO8zi6mtSHPXnZqWWf/argr9ZiHIUte4fNQxWZXO2aQcKCMGzuUP4Gq7GGMLN+BUenTyOGwxnqlV7rVXZjpQuC0nn32Bqg2ETo6bB6FPO6A9vtAQzqBCKy+abqsT02aGclzcBGNVj9t0PZLtm6KqEaMN9tlRvluDKY1jVl6YsEU/ynRgU8tp3iVEVFi1FvApXDVWoBZ85JN284grwUd6yghk7B8AWkxfMDPE1II7rzvB2NcJQWdLcuEpQiHTCDdVTdzHPf2tBXOPrM/R+/JD0dcqFvC6KxhPYZ1Qd4pxHYwRmmrfrtPytXrw786Iffin5rH6DTrtRWuLca4eGomB+LoTjCuraxqLoFyQpoz64u81bzhVBLePIs72m9PS0dBRr7uvqQ/HgqKnNCRSL8JEFLmDl6htYdt0zMYpQhMfzjxY+w0/8CaJX9+Jg3uwn/L1nypG81T/O5peDXs9v1wu+4PJ1VW7Aj00VUf5XtNEZKsLdQHrDc+Hvlm0yOI7Pbo+CbT59od2RIXnpfy5ZZTKVyhJLmGRuFC7lq/pg/EnqnckTMhUMe9DLfwcquYu8tkO737/8z/7F8uEatajfTqqD15/IPKMGJNVJZ4dsUqRgbdGfHz+sPo87N7Zh7sf76NvayFy3wUumTf6egNR7E/1ydNbB/wQoXzRx/enx/h3JSTUqzx8+PD17vHx+fn56fOtopu8/kDkGhi8j3LVhorBToOpv19/rHj9Q5r68x8U2Ks7zXwY2qwuzfli0JvwVyREjvZm5to7k28K6L627SsOaIVfw/Jz8zrSgS77F3a74WsvzfxppRDWl3VvRUj7fofDf6X3u8SvG+UQw9ALUKV4aVrq91bw9wZI2/d1OkwMQ25VfHp8fLxL9dqR1FxQPNCbSNsXt15lhvGHVXhHpX8nR1ouugt94KEZGxm4Fg5z7UTEMBTGRvpX8KXlgu2JS8hS57avOUVb199dL2IYEt/L3w0XhE+HmhNm9uJed5K38GFIvs55dSdcdFezCVnqJ7ySFJx22zWWGIbEguvu74SLpvKZNIYljmAOUH/X8QAxDG8QsnbDBbsTV4CxkGf6DlBc5D9XUcNwYFV2wgU39W0MYVaRCEw6bLZbXa8Nww52d8ElkgYwnGTkA5HWQ9gpl/gCJ+jELlm74KIlLGjZNkMtzRCB3V/fus1FLcpk7O+EC0oiLC0+KC7FwQg8i9+Tz0kcNQxbeDdcsLl+ZAkYkdsG1mgudeTjRQ3Da4uO+vy5wOgVC/IFLTHNHjlGp7vjUtqwbHOuvO1DOBAh9HuHeM3i9EMD7c5M1IYhmdm74fqMtFowI8IiOuxGO4CQs6hhCM4sDXDkzvVd4zJ9tBRBWFicd6U6lDbsGLviekHaEZUqlDvCEnLDF9asEzUMT0Qublx91K24ziC9VJ6IsI7QjXyFgLlE/Z1YHWoY+mAowrTOnesBgq0y4Qa8vKqwSeF73OTFSWuF375E9+8cmr6R9O6Njbm+0o0ZyG2me0b2FEoPiN5r6692zE34eLCaLD0ZQ8bPqvdHbcT10GAhG8xsUdjqxVJ1EMp+/sEpUQiEnxN1bdh//Jgz196fmD1Pm4/Fa0WF1dHZxUhk93ZckaFAX2UWLfu6Jde/QZxrYjI/EoPmmJlSdcBIzFsnsnvbRlNmu8L+3OpX6m3A9Re6C23x4YZBOZUdORLNEZrmrBPZMITCtjzY4JygdSH5DbgermkcQDQem9doasuRCDoxPil1Y2EDAZIQeKzBhgZkeBFzBn95aMrdITDamq7UibA6N5OauIk4TGkY6tS8TPjPlUvUD5DPtfro3HIMebx+gXINJ5psFBpHcuLCSvMtdy76EgGMtc0G4np5prQKwNpe5qjs2Sgkw1CeXYMJnvRuts25YMsSanCobUoyj0emetMU2CD5KXuHjUKjrO7J08fz5aLDsBl8iQndbTYCZkducVKTP+lauePQgnzfl73Ho6L7+ss+DCi7dW6b6h1a8I6mvKYYZg+qqaNrGaOHKbk+KrNXPbwB/rkjo3x4f4bGOSVO8QHfVoHXZjbvKx3X72Plfmkddo3uIVIqlmewp/JZxcRbsabKFx/uor/+fYrUOQ71eHoAATiFq+SjhFz9jOKyh3TUyTV6miZ3vfEXunpFD2bfIMQ4OZh7g7QaklvLjboZq+6fwf1KxUXVYSNa+YAGYm0FhuHFC9E3EW8otnZQnif8520f0v6SRpN6NNHt+yx51JS64zyvVBxt8cLkC/wPtOr1vZtxwUtwPCOaBevAa/jY3ObvISEW8CInu2Osur5HFP5//sw/DgC7XwMjJiUFAtk81Zln4RKFfJzLdl+d1y436Jt7O2wFy5kL1uWlNC30lJQxhO0ZhyOVYi67R0PlIXhUMc7yjx9SxVE1YvLnW/TQiKGBuYNcYtvK8wJTFAJD013Fe1WHabp+CFnSApTOQCsXbe/zapuG6K5d9Bf1U6auEXPyxqJvQRc6Ej6AzUUOkbcTqTWcS2b97iKO/ZWnOQguTZd7dLtDgIGxiPF4632xhqpqUGahG9hPeVnf0mxch5D+N5eJB4ETD0u6HybAqOu0P9p2fZ5Lp8easVvFv4ZoS649msWjAhq66qiynXTZhRAVrs7QdBunpaYcZZ8b071dxA/3/g4d1jHUDNNUR49tPcvKFvyw8WX4AFMGuZAGtC022KABMe8H3JLrdx8xf1hw6Qm+fX5gQIxF6D2yAFxu3GNEyYvvrc2tKXM3cbavbcSWJdlhmuqoieoBWAROGdjGQ1Ep+X1B2NxJnG3v7ATxYLXsME11wEjkySoi1E3AZuhyM+VBVIUYDjfCZZ7vJB7FKj/SJBQrbiQuyaotqsk6nN6GObaRui9Lv7slyjjScO/6rN7MXGAh8vpaOGYklsDEkHax5VCTyq5NN1qgiZkrjuJdCXXvZ3Qr03J9oRY9e6zsME0n0i3McPEfuzrdZKdFdVdXpodAjc241xFvywXDQHz1qliHNsXaqG/KsLZc5Srj7FFFcyayrojB25JfW7awTUouOMlxLp+sGq41Z4ImjtaXHAwvMmcptqUy9GXHXWdzllNz0aIq8smq9XpOypK2J1RfC5sThNpZHM2adFBKMuelkzXam5brv1Ag/K5Goh7MGAUXOKFEyMp3lCFeeiSdnKF0UK8zLl5puc7AOLvWHh5bh8Q6p9MhPBatMkLj1AtZTVpQdVkJm2XP74DrA91V09qmtV0Dc09YIDNUZMtqoAzaQwYZloEt2ExGVFquwyqMBD2W68aCGc3IX+knaiMoQpCWjIknPbA2Gi8yWhtp59dvsC4O9ZZpa1VcQluwyzAmZtBpJvvelOOjQd8FmymJKDXX7zCUlpalKbaE8sxCnGA5YHiXc6Yt6GOh7SEyZPz1j1kHYsr1i5rT9mjQUWS64osbY0Hrg06yYWq9WEe8+vX+Pax/v/13tih2ansD3BQEzsKyKa0nveGxDQ6Q2ftkkpynNBedMe9c84T12//syI76K+Wi3vhlWaU7rOmyQJ9iCJkiP9Ua7fNVxRpzc0DWa8yZi5WahieRnpv1xIzSZ1H8fkOg8lud6MVJin2JClcazpXYAoOsygxZX6m5HqT/RcnQQCxmrkYWn0uka05IYJmun2RHzLghWELXZ4yyZfMrhZNogXIb1p1ou+MHmaXYzZJ3vL/ukHCXRaOchVYadRf7y2Eu8sjyDKFF142QJQwyR85EbJs4aTaKD59Tp829gr2OHXOxgzeG67qiS5rEtToplyJkSX1hBS19nEzG/EprHihku8y4gGWZX/z8BrZZwl4HYimDVpgsscWOhdOQOfegeN1JsD7v0W7iGzRAHyjKDElE+1BnZdFlikDTIInzJ4QW+zl3TnSSNUA3gd8OM3pgKbn+d4QC72Zm37hlVHpkok17PFCoWr1C57m2dhszYTnzwpuDg4wGR1qu0xguQDNtD9yISYN9946Km65agF1TU5Fx49EPO2y93XD9DjVimnFFz8ls6wL0ZbvlBDstQesLcaAckOj4tVaIvxuu/wMPCMoqOq4VobOtDk2wuOLqUeqQuPJ8MXSlSiVau+t1uP4GXL5IGHXCbNja96lXe+TR4Js2ynI6C7yjcfh30LNtU39xbJANm2aDJmehYcOydEt+xUpVPNffbhhX0IUMqm1sYVb3rR9WMDmk7+1KHwIXFAqMDCtdtREdghu9+TjmpSXbdtrFbtavQ3FSKvZ0nsaGsWlFNcv2M+14N/YGzeCgKaNJrdP7LUnWq/MEcdx+xgB9Wi44EUtfH7vKLVzPlmKlChG1mr2LyXy2I3teS11e0zC6IOWD5rTKE62uWpZjAam5aG2sGi+FuL5Fq3sOh+eaAxL8ldUZjFBAMpwmyljfhhn0qUeSu6rriH5xgUbaL5WKltjYubgMQqGPz1mGYfp6RAiJsnMZDyxD000br5l52JbD02m19ap+354+3X3ItKeXies7kkfpNz3rBYQUUVvxsE3WBVcbArisVZh8//iQqZc24HqH1FHfDblSkHeGkmllubz8uOjrfrBlguyoTAoujyXUu22gsnDRyE3/eNCm4pebjfp+RIltI60LNfyy7bluxbUXV8ZyOhl4nUoOcJXyUtzz9pcNp9SGXM8xXEzGx95W2YZmVxb6R09bjr/sXIeJXCCjQWOzAwF2VxUPfsmlqzJy7T18gZp6P29vP34D+X4bZpv79WyellPztLLCKaoa7oQrImdnD3efnl50tNm810jJVmvqhtL3x9y6iso2XFzOvj5/C47JYbmxn7QWkMW5RGz0QPnn2x/ZNvtTSA5cIGd370LDcnp13PM69VbroAJy0Gq16p2u5w/m4+AHb7daf5MkJy6Qh8f3K1VLnHz8lHtPMcmRC+Th8enbehoqL18+Rcs/5yY5c1Eh2uTdx5dEoNvPT893O0Si8v9aPCGjylBixgAAAABJRU5ErkJggg=="
      }
)